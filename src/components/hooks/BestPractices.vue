<template>
  <h1>setUp + ts 最佳实践</h1>

  <div>count: {{ count }}</div>
  <div>name: {{ state.name }}</div>
  <div>age: {{ state.age }}</div>
  <div>age-reverse: {{ ageReverse }}</div>

  <!-- 注意：这里的add不需要加this -->
  <button @click="addAge">addAge</button>
  <button @click="addCount">addCount</button>
</template>

<script setup lang="ts">
import { reactive, ref, computed, watch } from "vue";

const state = reactive({
  name: "woow_wu7",
  age: 20,
});
const count = ref(0);

const addAge = () => state.age++;
const addCount = () => count.value++;

// computed
const ageReverse = computed(() =>
  state.age.toString().split("").reverse().join("")
);

// watch
// 1. 当 watch 一个 ref 对象时，直接传入 ref 对象
// 2. 当 watch 一个 reactive 对象中的某个属性时，使用函数
// 3. 当 watch 多个源时，使用数组

// 1
watch(
  count,
  (nextCount, prevCount) => {
    console.log(`nextCount`, nextCount);
    console.log(`prevCount`, prevCount);
  },
  {
    immediate: true,
  }
);

// 2
watch(
  () => state.age,
  (nextAge, prevAge) => {
    console.log(`nextAge`, nextAge);
    console.log(`prevAge`, prevAge);
  }
);

// 3
// 最好不要这样 侦听多个源，性能比较弱
// watch(
//   [count, () => state.age],
//   ([nextCount, prevCount], [nextAge, prevAge]) => {
//     console.log(`nextCount`, nextCount);
//     console.log(`prevCount`, prevCount);
//     console.log(`nextAge`, nextAge);
//     console.log(`prevAge`, prevAge);
//   }
// );
</script>

<style>
</style>