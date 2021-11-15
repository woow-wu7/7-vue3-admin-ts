<template>
  <p>嵌套路由，测试使用name命名</p>
  {{ age }}
</template>

<script>
export default {
  data() {
    return {
      name: this.$route?.params.age,
    };
  },
  mounted() {
    console.log(`this.$route.params`, this.$route?.params.age);
		console.log(`this.$route.match`, this.$route.match)
  },
  computed: {
    age() {
      return this.$route?.params?.age;
    },
  },
  watch: {
    // $route(to, from) {
    //   this.name = this.$route?.params.age;
    // },
  },
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter");
  },
  beforeRouteUpdate() {
    console.log("beforeRouteUpdate");
  },
  beforeRouteLeave() {
    console.log("beforeRouteLeave");
  },
};
</script>

<style>
</style>