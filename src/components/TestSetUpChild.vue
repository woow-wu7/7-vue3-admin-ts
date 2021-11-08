<template>
  <div class="setup">
    <h1>setUp</h1>
    <p>子组件接受到父组件中的name => {{ userPropsName }}</p>
    <p>setup返回的数据，获取的数据在1s后显示：{{ userDetailData.age || "" }}</p>
  </div>
</template>

<script>
import { defineComponent, ref, toRefs, onMounted, watch, computed } from "vue";

export default defineComponent({
  name: "TestSetUpChild",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    console.log(`props`, props);
    console.log(`props.user`, props.user);

    const { name } = toRefs(props.user);
    // 1
    // toRefs
    // 使用 `toRefs` 创建对prop的 `props.user` property 的响应式引用
    // 下面用了 watch 函数来监听 name 的改变

    const userDetailData = ref({});
    // 2
    // ref
    // ref 可以在vue中创建一个 ( 响应式引用 )，即创建一个响应式的变量
    // ( 传入的参数 ) 通过待用 ( value属性的对象 ) 返回，初始value就是参数的值

    const getUserDetailData = async () => {
      console.log("getUserDetailData -> 执行开始");
      const resData = await new Promise((resolve) =>
        setTimeout(
          () => resolve({ name: name || "", age: 30 + +new Date() }),
          3000
        )
      );
      userDetailData.value = resData;
      console.log("getUserDetailData -> 执行结束");
    };

    // 1
    // onMounted
    // -> mounted 时执行 getUserDetailData
    onMounted(() => {
      console.log("setup() -> onMount()执行了 -> 组合式API");
      getUserDetailData(); // 在 `mounted` 时调用 `getUserRepositories`
    });

    // 2
    // watch
    // -> userDetailData变化时 执行 getUserDetailData
    watch(name, async () => {
      console.log("----------");
      console.log("这是props变化后，执行的 getUserDetailData 方法");
      await getUserDetailData();
      console.log("----------");
    });

    // ???
    const computedUserDetailData = computed(() => {
      console.log("computed函数执行了");
      return userDetailData.value.age + 9999;
    });

    return {
      userDetailData,
      getUserDetailData,
      computedUserDetailData,
    };
  },

  data() {
    return {
      userPropsName: this.user.name,
    };
  },

  // 1
  // mountd()
  // 这里不用这样使用选项式API
  // 直接在 setup 中调用 onMount
  mounted() {
    console.log("mounted()执行了");
    this.getUserDetailData();
  },
  updated() {
    console.log(
      `this.computedUserDetailData`,
      this.computedUserDetailData.value
    );
  },

  // 2
  // watch
  // 注意：不要使用 ( 箭头函数 ) 来定义 ( wather ) 函数
  watch: {
    "user.name": [
      {
        handler: function (newValue, olValue) {
          console.log(`watch => newValue =>`, newValue);
          console.log(`watch => olValue => `, olValue);
          this.userPropsName = newValue;
        },
        deep: false,
        immediate: true,
      },
    ],
  },
});
</script>
