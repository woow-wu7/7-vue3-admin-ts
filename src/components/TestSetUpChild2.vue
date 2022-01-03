<template >
  <div style="background: yellow">
    <header>Test-setUp-child</header>
    <content>
      <h5>文章长度：{{ articlesLengthToString }}</h5>

      <div v-for="{ title, content } in articlesRef" :key="title">
        <h5>{{ title }}</h5>
        <h5>{{ content }}</h5>
      </div>
    </content>
  </div>
</template>

<script>
import { onMounted, ref, toRefs, watch, computed, onUpdated } from "vue";

export default {
  props: {
    articlesLength: {
      type: Number,
      default() {
        return 2;
      },
    },
  },
  data() {
    return {
      content: [],
    };
  },
  setup(props) {
    console.log(`props`, props);

    const { articlesLength: articlesLengthRef } = toRefs(props); // 获取组件中的props中的articlesLength属性的引用
    const articlesRef = ref([]); // 新建一个响应式数据
    const articlesLengthToString = computed(() =>
      articlesLengthRef.value.toString()
    );

    // console.log(`articlesLength`, articlesLength.value);

    const getArticles = async () => {
      const res = await new Promise((resolve) => {
        setTimeout(() => {
          return resolve(
            [
              {
                title: "文章标题1",
                content: "文章内容1文章内容1",
              },
              {
                title: "文章标题2",
                content: "文章内容1文章内容2",
              },
              {
                title: "文章标题3",
                content: "文章内容1文章内容3",
              },
              {
                title: "文章标题4",
                content: "文章内容1文章内容4",
              },
            ].slice(0, articlesLengthRef.value)
            // 注意：这里不能使用 this.articlesLength , 因为 setup 的调用发生在 data property、computed property 或 methods 被解析之前，所以它们无法在 setup 中被获取。
          );
        }, 0);
      });

      articlesRef.value = res;
    };

    onMounted(getArticles); // 注意和mounted的使用上的不同，这里是参数的形式传入

    onUpdated(() => {
      console.log(`number -> `, typeof articlesLengthRef.value);
      console.log(`string -> `, typeof articlesLengthToString.value);
    });

    watch(articlesLengthRef, getArticles);

    watch(articlesRef, (newValue, oldValue) => {
      console.log(`newValue`, newValue);
      console.log(`newValue[0]`, newValue[0]);
      console.log(`oldValue`, oldValue);
    });

    return {
      articlesRef, // 为什么 ref 对象在模版中使用时，不需要 ref.value，而是自动解绑了，行为不统一？？？
      getArticles,
      articlesLengthToString,
    };
  },
  // 问题：当组件中的 mounted 中调用的却是 setUp 中的函数，如何解耦？
  // 回答：在setUp中使用使用类似的mounted的钩子函数 -> onMounted
  // mounted() {
  //   this.getArticles();
  // },
  updated() {
    console.log(`this.articlesLength`, this.articlesLength);
  },
  // watch: {
  //   articlesLength: "getArticles",
  //   // watch props中的 articlesLength 的变化，变化时执行 this.getArticles 函数
  //   // 除了在这里使用 watch 外，在 setUp 中也能使用 watch
  // },
};
</script>

<style>
</style>