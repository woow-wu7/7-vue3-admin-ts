<template>
  <p>testDirective</p>
  <input type="text" v-focus placeholder="全局指令v-focus" />
  <!-- 利用全局指令实现-在父组件挂载完成后获取焦点 -->

  <input type="text" v-focus2 placeholder="局部指令v-focus2" />
</template>

<script>
// 1
// global directive 全局指令
// app.directive("focus", {
//   mounted(el) {
//     el.focus();
//   },
// });

// 2
// 这里为什么是强调父组件mounted？
// 因为父子生命周期执行顺序是：( 子组件先mounted ) 然后才是 ( 父组件mounted )

// 3
// 局部指令
export default {
  directives: {
    focus2: {
      mounted(el, binding, vnode, oldVnode) {
        // el 参数表示 -> 指令所绑定的元素，可以用来直接操作 DOM
        el.focus();

        console.log(`binding`, binding);
        console.log(`vnode`, vnode);
        console.log(`oldVnode`, oldVnode);
      },
    },
  },
};
</script>

<style>
</style>