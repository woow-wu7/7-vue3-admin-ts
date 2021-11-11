<template>
  <p>TestHookOrderChild</p>
  <p>子组件接受父组件的count：{{count}}</p>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      require: true,
      default() {
        return 0
      }
    }
  },
  beforeCreate() {
    console.log("子组件-beforeCreate");
  },
  created() {
    console.log("子组件-created");
  },
  beforeMount() {
    console.log("子组件-beforeMount");
  },
  mounted() {
    console.log("子组件-mounted");
  },
  beforeUpdate() {
    console.log("子组件-beforeUpdate");
  },
  updated() {
    console.log("子组件-updated");
  },
  beforeUnmount() {
    console.log("子组件-beforeUnmount");
  },
  unmounted() {
    console.log("子组件-unmounted");
  },
};
</script>

<style>
</style>