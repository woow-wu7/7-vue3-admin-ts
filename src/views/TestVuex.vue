<template>
  <p>test-vuex</p>
  <p>name:{{ name }}</p>
  <p>password: {{ password }}</p>
  <p>getters -> {{getUserMessage}}</p>
  <button @click="getData">点击 - 获取登录数据</button>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  mounted() {
    console.log(`this.$store.state.HomeModule`, this.$store.state.HomeModule);
  },
  data() {
    return {
      country: "chongqing",
    };
  },
  computed: {
    // 1
    // 字符串
    // ...mapState("HomeModule", ["name", "password"]),
    // 2
    // 对象
    // ...mapState("HomeModule", {
    //   name: state => state.name + 'xx',
    //   password: state => state.password
    // }),
    // 3
    // 对象，方法非箭头函数时，使用this
    ...mapState("HomeModule", {
      name(state) {
        return state.name + this.country;
      },
      password: (state) => state.password,
    }),
    ...mapGetters('HomeModule', {
      getUserMessage: 'getUserMessage'
    })
  },
  methods: {
    ...mapActions("HomeModule", ["getUser"]),
    getData() {
      this.getUser(10);
    },
  },
};
</script>

<style>
</style>