# 7-vue3-admin-ts

# (一) Vue3 学习
- defineComponent
  - 作用：用来让 Typescript 推断出 Vue 组件 config 中的类型
- 如果数据类型是复杂类型，ts 不能自动推断出类型时，可以使用 类型断言。即 ( 如果你有一个复杂的类型 或 接口，则可以使用类型断言对其进行指明 )

## (1) 组合式 api - setup
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

## (2) 路由 v4.x

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



## (3) 自定义指令
- vue3中优化了指令中的钩子名称，和组件的生命周期保持一致，比vue2做的更好了
- 分为：全局指令 和 局部指令
```
1. 全局指令
const app = Vue.createApp({})
app.directive('focus', {
  mounted(el) {}
})

2. 局部指令
directives: {
  focus: {
    mounted(el) {}
  }
}

3. 指令中的钩子函数
- created
- beforeMount
- mounted
  - mounted 表示在 ( 被绑元素的父元素 ) 被 ( 挂载后 ) 调用
  - 注意：
    - 因为：mounted生命周期钩子是 子组件的mounted()执行后，父组件的mounted()才会执行
    - 所以：这里父组件挂载完时，子组件即绑定指定的组件肯定也挂在完成了
- beforeUpdate
- updated
- beforeUnmount
- unmounted

4. 钩子函数的参数
- el
  - 指令所绑定的元素，可以用来直接操作 DOM
bind
  - 一个对象，包含以下属性
    - name：指令名，不包括 v- 前缀
    - value：指令的绑定值
    - oldValue：指令绑定的前一个值
    - expression：字符串形式的指令表达式
    - arg：传给指令的参数，可选
    - modifiers：一个包含修饰符的对象
- vnode：Vue 编译生成的虚拟节点
- oldVnode：上一个虚拟节点
```

# (二) vue2复习

## (2.1) Prop
- 传入对象的所有属性
```
如果想传入一个对象的所有属性可以使用一个 ( 不带参数的 v-bind="obj" ) 传入对象的所有属性
-------

<TestPropsChild  :="{name: 'woow_wu7', age: 20}"/>
等价于 <TestPropsChild  v-bind="{name: 'woow_wu7', age: 20}"/>
等价于 <TestPropsChild  v-bind:name="woow_wu7" v-bind:age="20"/>
详见 TestProps.vue 组件
```
- props什么情况下传入的是 ( 引用 ) ?
  - 当 props 是 ( 对象或数组 ) 时，传入子组件的是 ( 原数据的引用 )
  - 也就是说：，在子组件中改变变更这个对象或数组本身将会影响到父组件的状态
- props的验证
  - 用对象表示时
    - type：表示类型
    - required：表示必填
    - default：表示默认值，推荐使用函数返回值的形式
    - validator：自定义验证函数

## (2.2) v-model 双向数据绑定
- v-model 用在哪些元素标签中？
  - input
  - textarea
  - select
- model：是模型的意思
- v-model会忽略在标签中设置的初始值，而使用data中的值作为初始值
- **修饰符**
  - .lazy
    - 表示在 change 事件后触发，而不是 input 事件时出发
  - .number
    - 自动将用户的输入值转为 ( 数值 ) 类型
  - .trim
    - 自动过滤用户输入的首尾空白字符
## (2.3) v-for
- `<div v-for="(item, index) in arr" :key="index">`
- `<div v-for="(value, key, index) in obj" :key="key">`

## (2.4) v-if
- template
  - 场景：当v-if要隐藏多个元素时，可以使用 <template /> 标签包裹，将v-if作用域template标签
  - 好处：template在DOM树中是不可见的，类似于react中的 `<></>` 标签
  - 原因：因为 v-if 是一个指令，所以必须将它添加到一个元素上
- **v-if 和 v-for 一起使用的情况**
  - `不推荐 v-if 和 v-for 同时使用在一个元素标签上`
  - `当 v-if 和 v-for 一起使用时，优先级 v-for > v-if`
  - **如何优化**
    - computed：如果是只渲染列表中的部分内容，可以先将数据进行 computed 中进行过滤
    - v-if提升到父级：如果列表是根据条件显示隐藏，可以把 v-if 放到 v-for 的外层
- for...in
  - 1
  - for...in 遍历 ( 自身属性 + 可枚举属性 + 继承的可枚举属性 )
  - Object.keys() -> 自身属性 + 可枚举属性
  - Object.getOwnPropertyNames() -> 遍历自身属性 + 可枚举属性 + 不可枚举属性
  - 一般情况下我们都是希望遍历对象自身属性，所以一般配置 hasOwnProperty
  - 2
  - for...in
    - 可以遍历 对象 和 数组
    - 获取的是对象和数组的 key
  - for...of
    - 可以遍历数组，不能遍历对象，因为没有iterator接口
    - 获取的是数组的 value



## (2.5) 插槽
- 作用域
  - 父级模板里的所有内容都是在父级作用域中编译的
  - 子模板里的所有内容都是在子作用域中编译的
- 后备内容
  - `<slot>后备内容</slot>`将在不提供任何插槽内容时，进行渲染；提供插槽内容时将渲染提供的内容
- 具名插槽
  - (template, v-slot, slot的name属性)
  - 存在多个插槽时，使用具名插槽进行区分
  - 插槽的内容：使用 `<template v-slot:header >content</template>` 来区分
  - 插槽：使用 `<slot name="header"></slot>`
  - 注意：**v-slot 只能添加在 `<template>` 上**
- 作用域插槽
  - 需求：让 ( 插槽内容 ) 能够访问 ( 子组件中才有的数据 )
  - 实现：
    - `<slot v-bind:user="user">`
      - `<slot></slot>`标签除了 ( name属性 ), 还可以传入任意自定义属性
    - `<template v-slot:default="slotProps">`
      - 等价于 `<template v-slot:default="{user}">`
      - 等价于 `<template #default="{user}">`
- 具名插槽的缩写
  - `v-slot -> #`
  - `v-on -> @`
  - `v-bind -> :`



## (2.6) mixin - 2.0版本
- 作用：复用一些功能，包含生命周期钩子，data，computed，methods等
- 一个 ( 混入对象 ) 包含任意 ( 组件选项 )
- **具体规则**
  - 钩子函数
    - 都将被调用：同名的钩子函数，将被 ( `合并成一个数组` )，都将被调用
    - 执行顺序：mixin中的钩子函数先调用，mixin钩子 > options钩子
  - 值为对象的选项
    - 比如： methods、components 和 directives
    - 将被合并为同一个对象，两个对象键名冲突时，取 ( `组件对象的键值对` )
- 可以使用 `全局混入` -> `全局将影响每一个之后创建的 Vue 实例`


## (2.7) watch
- watch对象key对应的类型
  - function
  - string - 函数名'functionA'，或者对象的属性'a.b'
  - object - `handler deep immediate sync`
  - array
  - 最终都会把不同类型的 handler 转换成函数
- 注意点
  - `watcher函数不能是 ( 箭头函数 )`
- watch对象中的key对应的options对象支持的属性
  - **deep**
    - 作用：深度监听
    - 比如：
      - 一个data中的一个属性是一个对象时，如果你修改对象中的某个属性，watch对应函数是不会执行的，除非你使用了deep属性，这样该对象中的每个属性的变动都会触发该watch函数
      ```
        data() {
          return {
            obj: { name: "woow.wu7" },
          };
        }
        -------
        watch: {
          obj: {
            handler: function (newValue, oldValue) {...}
          }
        }
        -------
        出现问题：上面当修改 obj.name 的值时，handler函数是不会执行的
        如何解决：deep 属性
        具体代码：watch: { obj: { handler: function(){}, deep: true }}
      ```
  - **immediate**
    - 作用：
      - 回调将会在侦听开始之后被立即调用
      - 立即执行cb，即watch对象中的 handler 函数，无需等到依赖变化才去执行
  - **sync**
    - 作用：保证 ( 同步watch对象的handler ) 在 ( 普通的watch对象的handler ) 前面执行

# (三) vue-router3

## (1) 动态路由匹配
- 动态路径参数 dynamic segment
  - 动态路径参数以 `:` 开头
  - `{ path: '/user/:id', component: User }`
- 路由参数
  - 结果：**当使用路由参数时，原来的组件实例将会被复用**
  - 原因：因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效
  - 注意：不过，这也意味着组件的生命周期钩子不会再被调用
- 复用组件时，如何对路径参数做出响应？
  - 1. 使用 watch: { $route(to, from){} }
  - 2. beforeRouteUpdate 生命周期

## (2) 编程式路由
- name -> params
- path -> query
- 命名的路由 `router.push({ name: 'user', params: { userId: '123' }})`
- 带查询参数，变成 /register?plan=private `router.push({ path: 'register', query: { plan: 'private' }})`
- `router.push({ path: `/user/${userId}` })`

## (3) 重定向
- redirect
  - string
  - object -> redirect: {name: 'xxxx'}
  - function -> redirect: to => {...}

## (4) 别名
- /a 的别名是 /b，意味着，当用户访问 /b 时，URL 会保持为 /b，但是路由匹配则为 /a，就像用户访问 /a 一样

## (5) 路由传参
- **$route的缺陷**
  - 问题：在组件中使用 $route 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性
  - 解决：使用props解耦路由，这个属性很有用
  - 详见：TestVueRouter3Detail 组件
- props有三种模式
  - boolean
  - object
  - function --->   props: route => ({ query: route.query.q })

## (6) 导航守卫
- 参数或查询的改变并不会触发进入/离开的导航守卫
- 全局路由守卫
  - **router.beforeEach**
  - **router.afterEach**
  - **router.beforeResolve**
- 路由独享的守卫
  - **beforeEnter**
- 组件内的守卫
  - **beforeRouteEnter**
    -> 在渲染该组件的对应路由被 confirm 前调用,不！能！获取组件实例 `this`，因为当守卫执行前，组件实例还没被创建
    -> this：不能访问this
    -> 可以传入 next 回调，因为在回调中获取this
  - **beforeRouteUpdate**
    -> 一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候被调用
    -> 可以访问this
    -> 因为有了this，所以next不支持回调方式
  - **beforeRouteLeave**
    -> 导航离开该组件的对应路由时调用
    -> 可以访问 this


# (四) vuex
- dispatch action -> 可以异步操作
- commit mutation
- computed -> mapState -> vuex通过computed实现的响应式
- computed -> mapGetters -> vuex中的getters类似vue组件中的computed
- methods -> mapActions

### (1) 一些概念
- state
  - `属性参数是 state`
- getters
  - `属性的参数是 state getters`
  - 类似于组件中的计算属性computed
  - 具有computed的特征：1.返回值会被缓存，只有值发生变化时候才会重新计算 2.并且只有在被使用到时才会发生计算的过程
- mutations
  - `属性参数是 state payload`
  - 必须是同步函数，异步操作放在actions中
- actions
  - `属性参数是 context params`
  - 可以实现异步操作
- modules

### (1) mapState
- 参数类型
  - 对象
    - 箭头函数
    - 字符串
    - 普通函数，是普通函数时，可以获取到当前组件实例 this
  - 数组
    - 当映射的 ( 计算属性名称 ) 和 ( state的子节点名称 ) 相同时，可以使用数组，成员是state属性名称字符串

### (2) mapGetters
- 属性的参数
  - 第一个参数：是作用域范围内的state
  - 第二个参数：getters属性，表示getters其实使用其他的getter
```
getters: {
  // ...
  doneTodosCount: (state, getters) => {
    return getters.doneTodos.length
  }
}
```

### (3) mapMutations
```
actions
-------

actions: {
  checkout ({ commit, state }, products) {
  }
}
```