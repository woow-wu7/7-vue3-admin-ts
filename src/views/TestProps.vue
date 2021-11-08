<template>
  <div class="testProps">
    <TestPropsChild :obj="obj" :="{ name: 'woow_wu7', age: 20 }" />
    <!-- 等价于：<TestPropsChild  :obj="obj" :name="woow_wu7" :age="20"/> -->
    <!-- 等价于：<TestPropsChild  :obj="obj" v-bind:="{name: 'woow_wu7', age: 20}"/> -->
    <!-- 如果要传入一个对象的所有属性，使用一个不带参数的 v-bind="" 传入整个对象 -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TestPropsChild from "@/components/TestPropsChild.vue";

export default defineComponent({
  components: {
    TestPropsChild,
  },
  data() {
    return {
      obj: {
        a: 1,
        b: 2,
        c: 3,
      },
    };
  },
});
</script>
