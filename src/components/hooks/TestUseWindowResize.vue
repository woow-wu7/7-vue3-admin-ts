<template>
  <section>
    <div>width: {{ width }}</div>
    <div>height: {{ height }}</div>
  </section>
</template>

<script lang="ts">
import { useWindowResize } from "@/utils/hooks/index";

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