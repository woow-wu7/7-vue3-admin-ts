<template>
  <p>testVif</p>
  <button @click="toggle">显示/隐藏</button>

  <!-- v-if -->
  <div v-if="isShow">单个内容</div>
  <template v-if="isShow">
    <p>当要一起隐藏多个内容时，可以使用`template`标签包裹</p>
    <div>`template` 元素当做不可见的包裹元素</div>
    <div>因为 v-if 是一个指令，所以必须将它添加到一个元素上</div>
  </template>

  <!-- v-for 遍历数组 -->
  <div v-for="(item, index) in messageArr" :key="index">
    <span>name: {{ item.name }}</span>
    <span>age:{{ item.age }}</span>
  </div>

  <!-- v-for 遍历对象 -->
  <div v-for="(value, key, index) in messageObj" :key="key">
    <span>value: {{ value }}</span> ; <span>key:{{ key }}</span> ;
    <span>index: {{ index }}</span>
  </div>
</template>

<script lang="ts">
interface IData {
  isShow: boolean;
  messageArr: {
    name: string;
    age: number;
  }[];
  messageObj: {
    name: string;
    age: number;
  };
}
export default {
  name: "TestVif",
  data(): IData {
    return {
      isShow: true,
      messageArr: [
        {
          name: "woow_wu1",
          age: 20,
        },
        {
          name: "wang",
          age: 30,
        },
      ],
      messageObj: {
        name: "111",
        age: 2222,
      },
    };
  },
  methods: {
    toggle(): void {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style>
</style>