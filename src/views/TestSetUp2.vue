<template>
  <div style="border: 1px solid red; padding: 10px">
    <header>
      <header>Test-setUp2</header>
      <button
        @click="articlesLength = [1, 2, 3, 4][Math.floor(Math.random() * 4)]"
      >
        点击改变父组件的articlesLength属性，articlesLength属性会作为子组件的属性传入，在子组件中watch了articlesLength的变化，变化后执行setUp中的函数从新获取渲染数据
      </button>
      <TestSetUpChild2 :articles-length="articlesLength" />
    </header>
    <content>
      <TestUseWindowResize v-if="showTestUseWindowResize" />
      <button @click="showTestUseWindowResize = !showTestUseWindowResize">
        挂载/卸载 TestUseWindowResize
      </button>
    </content>
  </div>
</template>

<script>
import TestSetUpChild2 from "@/components/TestSetUpChild2.vue";
import TestUseWindowResize from "@/components/TestUseWindowResize.vue";

export default {
  name: "Test-setUp2",
  components: {
    TestSetUpChild2,
    TestUseWindowResize,
  },
  data() {
    return {
      articlesLength: 2,
      showTestUseWindowResize: true,
    };
  },
};
</script>

<style>
</style>