# 7-vue3-admin-ts

# (一) Vue3 学习
- defineComponent
  - 作用：用来让Typescript推断出Vue组件 config 中的类型
- 如果数据类型是复杂类型，ts不能自动推断出类型时，可以使用 类型断言。即 ( 如果你有一个复杂的类型 或 接口，则可以使用类型断言对其进行指明 )

## (1) 路由 v4.x
- 安装
  - npm install vue-router@4
- 使用
```
// router
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 入口文件中
1. createApp(App).use(router).mount('#app')
2. 也可以写成下面的形式
   - const app = createApp(App) // 返回app实例
   - app.use(router) // app.use() 返回新的app实例，所以可以链式调用
   - app.mount('#app') // 挂载
```
- app.use(router)
- this.$router
- this.$route
```
app.use(router)
- 通过调用 app.use(router) 后
  - 整个路由：我们就可以在任意组件中使用 this.$router 访问到该路由实例对象
  - 当前路由：以 this.$route 的形式访问当前路由的route对象
```