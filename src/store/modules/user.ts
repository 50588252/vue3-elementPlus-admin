//创建用户相关的小仓库
import { defineStore } from 'pinia'
//引入接口
import { reqLogin } from '@/api/user'
//引入数据类型
import type { loginFormData, loginResponseData } from '@/api/user/type.ts'
import type { UserState } from './types/type'
//引入路由(常量路由)
import { constantRoute } from '@/router/routes'
import { GET_TOKEN, SET_TOKEN } from '@/utils/token.ts'
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
      const result: loginResponseData = await reqLogin(data);
      console.log(result)
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
  },
})
//对外暴露获取小仓库方法
export default useUserStore
