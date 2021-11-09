<template>
  <div class="testSlotChild">
    <p>testSlotChild</p>
    <slot name="default" :age="age">这是后备内容</slot>
    <slot name="header">这是后备内容</slot>
    <slot name="footer">这是后备内容</slot>
    <slot name="abbreviation" :age2="age"></slot>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TestSlotChild",
  data() {
    return {
      age: 100,
    };
  },
});
</script>
<style lang="sass" scoped>
.testSlotChild
  border: 1px solid red
</style>
