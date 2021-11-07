import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/other',
    name: 'Other',
    component: () => import(/* webpackChunkName: "other" */ '../views/Other.vue')
    // 解析
    // 1. 这里使用到了 import() 函数，能实现按需加载，返回值是一个promise对象
    // 2. /* webpackChunkName: "other" */ 能将webpack打包后的 chunk 名命名为 other
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
