<template>
  <p>testMixin</p>
  <p>{{name}}</p>
  <button @click="getName">测试mixin和options中，对象属性中同名key时，取options中的</button>
</template>

<script>
var mixins = {
  data() {
    return {
      name: 'woow_wu7'
    }
  },
  mounted() {
    console.log('mixin中的同名钩子')
  },
  methods: {
    getName() {
      console.log(`7`, 7)
    }
  }
}
export default {
  name: 'TestMixin',
  mixins: [mixins],
  data() {
    return {
      name: 'woow_wu8'
    }
  },
  mounted() {
    console.log('option中的同名钩子')
  },
  methods: {
    getName() {
      console.log(`8`, 8)
    }
  }
}
</script>

<style>

</style>