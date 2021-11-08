<template>
  <div class="other">
    <button @click="changeProps">改变props</button>
    <p>父组件中的name => {{ user.name }}</p>
    <TestSetUpChild :user="user" />
    <!-- props的值是一个 动态类型的值 时 -->
    <!-- 需要使用 v-bind 来告诉 vue 该属性是一个表达式，而不是一个字符串 -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TestSetUpChild from "@/components/TestSetUpChild.vue";

export default defineComponent({
  components: {
    TestSetUpChild,
  },
  data() {
    return {
      user: {
        name: "woow_wu7",
      },
    };
  },
  methods: {
    changeProps() {
      this.user.name = this.user.name + "1";
    },
  },
});
</script>
