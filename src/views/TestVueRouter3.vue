<template>
  <p>test-vueRouter3</p>

  <button @click="goA">测试动态路由-动态路径参数-A详情</button> <br />
  <button @click="goB">测试动态路由-动态路径参数-B详情</button>
  <router-view></router-view>
</template>

<script>
export default {
  name: "TestVueRouter3",
  methods: {
    goA() {
      this.$router.push({
        path: "/testVueRouter3/detail/a",
        query: {
          name: "a",
        },
      });
    },
    goB() {
      this.$router.push({
        path: "/testVueRouter3/detail/b",
        query: {
          name: "b",
        },
      });
    },
  },
};
</script>

<style>
</style>