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
    path: "/testSetUp2",
    name: "testSetUp2",
    component: () =>
      import(/* webpackChunkName: "testSetUp" */ "../views/TestSetUp2.vue"),
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
      import(/* webpackChunkName: "testWatch" */ "../views/TestWatch.vue"),
  },
  {
    path: "/testDirective",
    name: "testDirective",
    component: () =>
      import(
        /* webpackChunkName: "testDirective" */ "../views/TestDirective.vue"
      ),
  },
  {
    path: "/testMethodsKey",
    name: "testMethodsKey",
    component: () =>
      import(
        /* webpackChunkName: "testMethodsKey" */ "../views/TestMethodsKey.vue"
      ),
  },
  {
    path: "/testVueRouter3",
    name: "testVueRouter3",
    component: () =>
      import(
        /* webpackChunkName: "testVueRouter3" */ "../views/TestVueRouter3.vue"
      ),
    children: [
      {
        path: '',
        component: import(
          /* webpackChunkName: "default" */ "../components/Default.vue"
        ),
      },
      {
        // 如果嵌套路由中的path是以 '/' 开头的话，表示从根路径开始
        path: "detail/:id",
        props: true,
        // props: route => ({
        //   query: route.query.id
        // }),
        component: import(
          /* webpackChunkName: "testVueRouter3Detail" */ "../components/TestVueRouter3Detail.vue"
        ),
      },
      {
        path: "detail/other",
        name: 'testVueRouter3DetailOther',
        // redirect: '/testDirective',
        component: import(
          /* webpackChunkName: "testVueRouter3Detail" */ "../components/TestVueRouter3DetailOther.vue"
        ),
      }
    ],
  },
  // {
  //   path: "*",
  //   component: () =>
  //   import(
  //     /* webpackChunkName: "404" */ "../views/404.vue"
  //   ),
  // }
  {
    path: "/testVuex",
    name: "testVuex",
    component: () =>
      import(
        /* webpackChunkName: "testVuex" */ "../views/TestVuex.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 全局前置守卫
// router.beforeEach((to, from, next) => {
//   console.log('全局路由守卫')
//   console.log(`to`, to)
//   console.log(`from`, from)
//   console.log(`next`, next)
// })

export default router;
