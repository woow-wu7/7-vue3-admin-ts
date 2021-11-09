<template>
  <div class="testSlot">
    <p>testSlot</p>
    <test-slot-child>
      <template v-slot:default="{ age }">
        <p>这是父传入子的：default默认插槽 - slot的内容</p>
        <p>这是 ( 插槽内容 ) 获取到 ( 子组件作用域 ) 中的数据: {{ age }}</p>
      </template>
      <template v-slot:header>
        <p>这是父传入子的：header-slot的内容</p>
      </template>
      <template v-slot:footer>
        <p>这是父传入子的：footer-slot的内容</p>
      </template>
      <template #abbreviation>
        <p>v-slot的简写形式：#</p>
      </template>
    </test-slot-child>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TestSlotChild from "@/components/TestSlotChild.vue";

export default defineComponent({
  name: "TestSlot",
  components: {
    "test-slot-child": TestSlotChild,
  },
});
</script>

<style lang="sass" scoped>
.testSlot
  padding: 20px
  border: 1px solid black
</style>
