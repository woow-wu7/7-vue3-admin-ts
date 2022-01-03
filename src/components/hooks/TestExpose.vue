<template>
  <div>reactive:{{ user.name }}</div>
  <button @click="changeReactiveUserName">改变reactive</button>
</template>

<script>
import {
  h,
  ref,
  reactive,
  isReactive,
  watchEffect,
  readonly,
  isReadonly,
  isProxy,
  toRaw,
} from "vue";

export default {
  setup(props, { expose }) {
    const count = ref(0);
    const add = () => count.value++;

    // 1
    // reactive
    // - 参数必须是对象或者数组，如果要让对象的某个元素实现响应式时比较麻烦。需要使用toRefs
    // - isReactive 表示 检查对象是否是由 reactive 创建的响应式代理
    const user = reactive({
      name: "woow_wu7",
      age: 20,
    });
    const changeReactiveUserName = () => (user.name = "woow_wu8");

    // 2
    // readonly
    // - 接受一个对象 (响应式或纯对象) 或 ref 并返回原始对象的只读代理。只读代理是深层的：任何被访问的嵌套 property 也是只读的
    const userReadonly = readonly(user);

    // 3
    // isProxy isReactive isReadonly
    // - isProxy 检查对象是否是由 reactive 或 readonly 创建的 proxy
    // - isReactive 表示 检查对象是否是由 reactive 创建的响应式代理
    // -检查对象是否是由 readonly 创建的只读代理。
    console.log(`isReactive(user)`, isReactive(user)); // true
    console.log(`isReadonly(userReadonly)`, isReadonly(userReadonly)); // true
    console.log(`isProxy(user)`, isProxy(user)); // true
    console.log(`isProxy(userReadonly)`, isProxy(userReadonly)); // true

    // 4
    // toRaw
    // 返回 reactive 或 readonly 代理的原始对象
    // 这是一个“逃生舱”，可用于临时读取数据而无需承担代理访问/跟踪的开销，也可用于写入数据而避免触发更改。不建议保留对原始对象的持久引用。请谨慎使用。
    // raw 是生的，未加工的意思
    const obj = {};
    const reactiveObj = reactive(obj);
    console.log("toRaw(reactiveObj) === obj", toRaw(reactiveObj) === obj); // true

    // 4
    // watchEffect
    // - 立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖变更时重新运行该函数
    watchEffect(() =>
      console.log("watchEffect,readonly --->", userReadonly.age)
    );

    // 5
    // 注意：这里 watchEffect作用于 -> readonly -> readonly🈶️作用在reactive的数据上，当修改reactive数据时，watchEffect也会执行
    user.age += 1;

    // 6
    // 修改readonly抛出警告：Set operation on key "age" failed: target is readonly.
    userReadonly.age += 2;

    // 7
    // expose
    // expose 暴露给父组件，父组件通过ref访问
    // 无论setUp是返回渲染函数，还是一个对象，都可以通过 expose 暴露给父组件，父组件通过 ref 获取
    expose({
      add,
    });

    // 返回一个渲染函数将阻止我们返回任何其它的东西
    return {
      user,
      changeReactiveUserName,
    };
  },
};
</script>

<style>
</style>