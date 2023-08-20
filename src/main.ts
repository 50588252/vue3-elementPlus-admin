import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// @ts-expect-error忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'virtual:svg-icons-register'
import globalComponent from './components/index'
//引入css样式
import '@/styles/index.scss'

//引入路由
import router from './router'
import pinia from './store'
import { isHasButton } from './directive/has'

const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(globalComponent)
app.use(router)
app.use(pinia)
isHasButton(app)

//引入路由鉴权
import './permisstion.ts'
app.mount('#app')
