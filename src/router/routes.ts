//对外暴露配置路由(常量路由):全部用户都可以访问到的路由
export const constantRouter = [
  {
    //登录
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
  },
  {
    //登录后的数据展示
    path: '/',
    component: () => import('@/views/home/index.vue'),
    name: 'layout',
  },
  {
    //404
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
  },
  {
    //任意路由
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
  },
]