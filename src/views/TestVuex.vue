<template>
  <p>test-vuex</p>
  <p>name:{{ name }}</p>
  <p>password: {{ password }}</p>

  <button @click="getData">点击 - 获取登录数据</button>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState("HomeModule", ["name", "password"]),
  },
  methods: {
    ...mapActions("HomeModule", ['getUser']),
    getData() {
      this.getUser(10)
    }
  }
};
</script>

<style>
</style>