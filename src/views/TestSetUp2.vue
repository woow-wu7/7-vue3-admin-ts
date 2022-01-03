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

    <!-- useWindowResize -->
    <section style="background: #faa755">
      <h1>useWindowResize</h1>
      <TestUseWindowResize v-if="showTestUseWindowResize" />
      <button @click="showTestUseWindowResize = !showTestUseWindowResize">
        挂载/卸载 TestUseWindowResize
      </button>
    </section>

    <!-- useWindowResize -->
    <section style="background: #b2d235">
      <h1>useEventListener</h1>
      <TestUseEventListener />
    </section>

    <!-- TestExpose -->
    <section style="background: #f2eada">
      <h1>expose，reactive</h1>
      <h5>
        通过expose获取到的来自子组件中的add函数执行的结果：{{ resultFromChildExpose }}
      </h5>
      <TestExpose ref="testExposeRef" />
    </section>
  </div>
</template>

<script>
import TestSetUpChild2 from "@/components/TestSetUpChild2.vue";
import TestUseWindowResize from "@/components/hooks/TestUseWindowResize.vue";
import TestUseEventListener from "@/components/hooks/TestUseEventListener.vue";
import TestExpose from "@/components/hooks/TestExpose.vue";

export default {
  name: "Test-setUp2",
  components: {
    TestSetUpChild2,
    TestUseWindowResize,
    TestUseEventListener,
    TestExpose,
  },
  data() {
    return {
      articlesLength: 2,
      showTestUseWindowResize: true,
      resultFromChildExpose: null,
    };
  },
  mounted() {
    console.log(
      `this.testExposeRef.testExposeRef.add()---->`,
      this.$refs.testExposeRef.add()
    );
    this.resultFromChildExpose = this.$refs.testExposeRef.add();
  },
};
</script>

<style>
</style>