//创建用户相关的小仓库
import { defineStore } from 'pinia'
//引入接口
import { reqLogin, reqLogout, reqUserInfo } from '@/api/user'
//引入数据类型
import type {
  loginFormData,
  loginResponseData,
  userInfoReponseData,
} from '@/api/user/type.ts'
import type { UserState } from './types/type'
//引入路由(常量路由)
import { anyRoute, asyncRoute, constantRoute } from '@/router/routes'
import { GET_TOKEN, REMOVE_TOKEN, SET_TOKEN } from '@/utils/token.ts'

// @ts-ignore
import cloneDeep from 'lodash/cloneDeep'
import router from '@/router'

function filterAsyncRoute(asyncRoute: any, routes: any) {
  return asyncRoute.filter((item: any) => {
    if (routes.includes(item.name)) {
      if (item.children && item.children.length > 0) {
        item.children = filterAsyncRoute(item.children, routes)
      }
      return true
    }
  })
}

//创建用户小仓库
const useUserStore = defineStore('User', {
  //小仓库存储数据地方
  state: (): UserState => {
    return {
      token: GET_TOKEN(), //用户唯一标识token
      menuRoutes: constantRoute, //仓库存储生成菜单需要数组(路由)
      username: '',
      avatar: '',
      //存储当前用户是否包含某一个按钮
      buttons: [],
    }
  },
  actions: {
    //用户登录
    async userLogin(data: loginFormData) {
      const result: loginResponseData = await reqLogin(data)
      if (result.code == 200) {
        //pinia仓库存储一下token
        //由于pinia|vuex存储数据  其实利用js对象
        this.token = result.data as string
        //本地存储持久化存储一份
        SET_TOKEN(result.data as string)
        //能保证当前async函数返回一个成功的promise
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data))
      }
    },
    //获取用户信息方法
    async userInfo() {
      //获取用户信息进行存储仓库当中[用户头像、名字]
      const result: userInfoReponseData = await reqUserInfo()
      //如果获取用户信息成功，存储一下用户信息
      if (result.code == 200) {
        this.username = result.data.name
        this.avatar = result.data.avatar
        this.buttons = result.data.buttons

        const userAsyncRoute = filterAsyncRoute(
          cloneDeep(asyncRoute),
          result.data.routes,
        )
        this.menuRoutes = [...constantRoute, ...userAsyncRoute, anyRoute]
        ;[...userAsyncRoute, anyRoute].forEach((route: any) => {
          router.addRoute(route)
        })
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
    //退出登录
    async userLogout() {
      //退出登录请求
      const result: any = await reqLogout()
      if (result.code == 200) {
        //目前没有mock接口:退出登录接口(通知服务器本地用户唯一标识失效)
        this.token = ''
        this.username = ''
        this.avatar = ''
        this.buttons = ['']
        REMOVE_TOKEN()
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
  },
})
//对外暴露获取小仓库方法
export default useUserStore
