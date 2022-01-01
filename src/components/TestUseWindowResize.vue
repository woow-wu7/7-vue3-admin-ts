<template>
  <section>
    <div>width: {{ width }}</div>
    <div>height: {{ height }}</div>
  </section>
</template>

<script>
import { useWindowResize } from "@/utils/hooks";

export default {
  setup() {
    const { width, height } = useWindowResize();
    return {
      width,
      height,
    };
  },
};
</script>

<style>
</style>