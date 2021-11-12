<template>
  <p>testMethodsKey</p>
</template>

<script>
export default {
  data() {
    return {
      count: 1
    }
  },
  methods: {
    // count() {
    //   console.log('methods中的key在options存在了，会触发warning')
    // }
  }
  // methods中的key在options存在了，会触发warning
}
</script>

<style>

</style>