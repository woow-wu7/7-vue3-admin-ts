<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="hello world" />
    <p>age: {{ age }}</p>
    <p>sum: {{ sum }}</p>
    <p>typeof sum: {{ typeofSum }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

interface IComplexObj {
  a: number;
  b: string;
}

export default defineComponent({
  // 要让 TypeScript 正确推断 Vue 组件选项中的类型，需要使用 defineComponent 全局方法定义组件
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      age: 20,
      complexObj: {
        a: 1,
        b: "2",
      } as IComplexObj, // 如果你有一个复杂的类型或接口，你可以使用类型断言 type assertion 对其进行指明
    };
  },
  computed: {
    sum() {
      return this.complexObj.a + this.complexObj.b;
    },
    typeofSum() {
      return typeof this.sum;
    },
  },
  methods: {},
  mounted() {
    // 1
    // const string = this.age.split(""); // ts将报错，因为number类型的包装对象上不存在 split 方法

    // 2
    console.log(`this.$router`, this.$router); // router
    console.log(`this.$route`, this.$route); // route

    // 3
    // 问题：获取组件名的方式有哪些？
    // - 1. vnode.componentOptions.Ctor.options.name
    // - 2. vnode.componentOptions.tag
    // - 3. 在组件中，通过 this.$options.name
    // - 区别：componentOptions.tag 为模版或者render书写的标签字符串时，根据用户的书写可能不统一
    console.log("this.$options.name", this.$options.name);
  },
});
</script>
