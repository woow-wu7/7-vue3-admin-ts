<template>
  <div class="testPropsChild">
    <p>testProps</p>
    <div v-for="item in computedObj" :key="item[0]">
      <!-- 测试计算属性 -->
      <p>{{ item[0] }} : {{ item[1] }}</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TestSetUpChild",
  props: {
    obj: {
      type: Object,
      require: true,
      default() {
        return {};
      },
    },
    name: {
      type: String,
      default() {
        return "";
      },
    },
    age: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  mounted() {
    console.log(`this.obj`, this.obj);
    console.log(`this.name`, this.name);
    console.log(`this.age`, this.age);
  },
  computed: {
    computedObj() {
      return Object.entries(this.obj);
    },
  },
});
</script>
