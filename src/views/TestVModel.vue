<template>
  <p>testVmodel</p>
  input事件时触发：<input type="text" v-model="value" /><br />
  change事件时触发：(.lazy)<input type="text" v-model.lazy="value" /><br />
  <div>测试：第二个input是在失去焦点时才会更新数据，而第一个input实时更新</div>
  <div>inputValue: {{ value }}</div>

  (.number)<input type="text" v-model.number="number" /><br />
  (.trim)<input type="text" v-model.trim="trim" /><br />
</template>

<script lang="ts">
interface IDate {
  value: string;
  number: number;
  trim: string;
}

export default {
  name: "TestVmodel",
  data(): IDate {
    return {
      value: "",
      number: 0,
      trim: "",
    };
  },
  watch: {
    number: function (newV: number): void {
      console.log(`.number->`, newV);
    },
    trim: function (newV: string): void {
      console.log(`.trim->`, newV);
      console.log(`.trim->length`, newV.length); // trim过了
    },
  },
};
</script>

<style>
</style>