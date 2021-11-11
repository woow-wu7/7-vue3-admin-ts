import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/testSetUp",
    name: "testSetUp",
    component: () =>
      import(/* webpackChunkName: "testSetUp" */ "../views/TestSetUp.vue"),
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    // 解析
    // 1. 这里使用到了 import() 函数，能实现按需加载，返回值是一个promise对象
    // 2. /* webpackChunkName: "other" */ 能将webpack打包后的 chunk 名命名为 other
  },
  {
    path: "/testProps",
    name: "testProps",
    component: () =>
      import(/* webpackChunkName: "testProps" */ "../views/TestProps.vue"),
  },
  {
    path: "/testVModel",
    name: "testVModel",
    component: () =>
      import(/* webpackChunkName: "testProps" */ "../views/TestVModel.vue"),
  },
  {
    path: "/testVif",
    name: "testVif",
    component: () =>
      import(/* webpackChunkName: "testVif" */ "../views/TestVif.vue"),
  },
  {
    path: "/testSlot",
    name: "testSlot",
    component: () =>
      import(/* webpackChunkName: "testSlot" */ "../views/TestSlot.vue"),
  },
  {
    path: "/testMixin",
    name: "testMixin",
    component: () =>
      import(/* webpackChunkName: "testMixin" */ "../views/TestMixin.vue"),
  },
  {
    path: "/testHookOrder",
    name: "testHookOrder",
    component: () =>
      import(
        /* webpackChunkName: "testHookOrder" */ "../views/TestHookOrder.vue"
      ),
  },
  {
    path: "/testWatch",
    name: "testWatch",
    component: () =>
      import(
        /* webpackChunkName: "testWatch" */ "../views/TestWatch.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
