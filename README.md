# 7-vue3-admin-ts

# (一) Vue3 学习

- defineComponent
  - 作用：用来让 Typescript 推断出 Vue 组件 config 中的类型
- 如果数据类型是复杂类型，ts 不能自动推断出类型时，可以使用 类型断言。即 ( 如果你有一个复杂的类型 或 接口，则可以使用类型断言对其进行指明 )

## (2) 组合式 api - setup

- 区分 ( 选项式 API ) 和 ( 组合式 API )
- **组合式 api 出现的原因**
  - 1.在之前 ( 一个完整的业务逻辑 ) 或散落在 ( 不同的代码块 )，使得维护大型项目变得困难
  - 2.使用 (data、computed、methods、watch) 组件选项来组织逻辑，当组件变大时，逻辑关注点的列表也会增长
  - 3.类似 react 中的逻辑分散，使用 ( useEffect 钩子 ) 的 ( 返回函数来处理清除工作 ) 等
- 如何解决 - setup 配置设置项
  - setup 何时执行：在组件创建之前执行，一旦 props 被解析，就将作为组合式 API 的入口
- warning
  - this
    - 在 setup 中不能使用 this，因为它找不到组建实例
  - 无法获取
    - setup 的调用发生在 data 、computed 或 methods 被解析之前，所以它们无法在 setup 中被获取
- 参数
  - props 或 context
- 返回值
  - setup 返回的内容都会暴露给 ( 组件的其他部分 ) 以及 ( 组件的模版 )
  - 比如 computed，methods，生命周期钩子
- **onMounted()**
  - 如何在 setup 中调用 mounted 时执行的函数
- **watch()函数**
  - import { watch } from 'vue'
  - 区分
    - 选项式的 api -> `new Vue({watch: counter(newV, oldV) => ...})`
    - 这里是直接从 vue 导出的 watch 函数
  - 作用
    - watch 响应式变量
      - 可以是 state
      - 可以是 ref 函数的返回值
  - watch 函数的三个参数
    - 一个想要侦听的响应式引用或 getter 函数
    - 一个回调：该回调有两个参数 newValue，oldValue
    - 可选的配置选项
- **toRefs()**
  - 响应式引用
- **computed() -> 独立的 computed 属性**
  - 与 ref 和 watch 类似
  - 也可以使用从 Vue 导入的 computed 函数在 Vue 组件外部创建计算属性
  - 语法
    - `computed(() => 对响应式value进行计算后，返回的值)`
    - 参数: 是一个 getter 函数，返回值是一个 ( 只读的响应式引用 )
- 最后
  - 将可以复用的逻辑单独抽离出来，形成 `自定义hook`，则可以在不同的组件中复用逻辑

## (1) 路由 v4.x

#### 安装

- npm install vue-router@4

#### 使用

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

#### setup 函数中访问路由

- 要在 setup 函数中访问路由，请调用 useRouter 或 useRoute 函数
