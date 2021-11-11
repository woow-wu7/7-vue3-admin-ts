<template>
  <p>testHookOrder</p>
  <button @click="updateFather">更新父组件</button>
  <p>{{ count }}</p>
  <TestHookOrderChild :count="count" />
</template>

<script>
import TestHookOrderChild from "@/components/TestHookOrderChild.vue";
export default {
  components: {
    TestHookOrderChild,
  },
  data() {
    return {
      count: 0,
    };
  },
  beforeCreate() {
    console.log("父组件-beforeCreate");
  },
  created() {
    console.log("父组件-created");
  },
  beforeMount() {
    console.log("父组件-beforeMount");
  },
  mounted() {
    console.log("父组件-mounted");
  },
  beforeUpdate() {
    console.log("父组件-beforeUpdate");
  },
  updated() {
    console.log("父组件-updated");
  },
  beforeUnmount() {
    console.log("父组件-beforeUnmount");
  },
  unmounted() {
    console.log("父组件-unmounted");
  },
  methods: {
    updateFather() {
      this.count = this.count + 1;
    },
  },
};
</script>

<style>
</style>