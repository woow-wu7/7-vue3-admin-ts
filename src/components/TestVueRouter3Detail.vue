<template>
  <p>TestVueRouter3 - Detail</p>
  {{ name }}
</template>

<script>
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
  // - 因为：使用计算属性可以是的：数据的修改逻辑更清晰，并且高内聚
};
</script>

<style>
</style>