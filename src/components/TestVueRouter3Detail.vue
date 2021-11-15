<template>
  <p>TestVueRouter3 - Detail</p>
  {{ name }}
</template>

<script>
import { onBeforeRouteUpdate } from 'vue-router';
export default {
  data() {
    return {
      // name: this.$route.params.id,
    };
  },
  computed: {
    name() {
      console.log(`this.$route.params.id`, this.$route.params.id);
      return this.$route.params.id;
    },
  },
  watch: {
    // "$route()": "name",
    // $route() {
    //   this.name = this.$route.params.id;
    // },
  },
  // 解释：
  // - 为什么？：这里之所以不使用 data.name + 在watch中$route中在去修改this.name
  // - 因为：使用计算属性可以使得：数据的修改逻辑更清晰，并且高内聚
  updated() {
    console.log('当使用路由参数时，组件将被复用，同时也说明组件的生命周期不在被复用')
  },
  beforeRouteUpdate() {
    console.log('组件')
  }
};
</script>

<style>
</style>