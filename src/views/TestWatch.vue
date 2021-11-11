<template>
  <p>testWatch</p>

  <button @click="changeA">changeA - 测试watche是一个函数</button>
  <p>a: {{ a }}</p>

  <button @click="changeB">changeB - 测试watch是一个字符串</button>
  <p>b: {{ b }}</p>

  <button @click="changeC">changeC - 测试watch的immediate属性</button>
  <p>c: {{ c }}</p>

  <button @click="changeObj">changeObj - 测试watch的deep属性</button>

  <p>d: {{ d }}</p>
  <button @click="changeAll">changeAll - 测试watch的sync属性</button>
</template>

<script>
export default {
  name: "TestWatch",
  data() {
    return {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      obj: {
        name: "woow.wu7",
        scroll: [10, 20, 30],
      },
    };
  },
  watch: {
    // wath 是一个函数
    a: function (newValue, oldValue) {
      console.log(`newValue`, newValue);
      console.log(`oldValue`, oldValue);
      console.log("非 sync 属性的 watcher --->", 22222222);
    },
    // watch 是一个字符串，表示方法名等
    b: "changeB",
    //  immdiate 该回调将会在侦听开始之后被立即调用
    c: {
      handler: function () {
        console.log("immediate");
      },
      immediate: true,
    },
    obj: {
      handler: function () {
        console.log("非 sync 属性的 watcher --->", 3333333);
      },
      deep: true,
    },
    d: {
      handler: function () {
        console.log("sync 属性的 watcher --->", 111111111);
        console.log(
          "使用 sync 属性的 watcher 函数会优先于 其他普通的watcher函数执行，其他默认是async异步的"
        );
      },
      sync: true,
    },
  },
  methods: {
    changeA() {
      this.a = this.a + 1;
    },
    changeB() {
      this.b = this.b + 1;
    },
    changeC() {
      this.c = this.c + 1;
    },
    changeObj() {
      console.log(
        "changeObj执行了，修改了对象中的某一个属性，但是没有触发watch中的obj对应的watcher函数，只有在watch时给对象添加上deep属性后，对象的属性变化时才会触发watch"
      );
      this.obj.name = this.obj.name + 1;
    },
    changeAll() {
      this.a = this.a + 1;
      this.b = this.b + 1;
      this.c = this.c + 1;
      this.d = this.d + 1;
      this.obj.name = this.obj.name + 1;
    },
  },
};
</script>

<style>
</style>