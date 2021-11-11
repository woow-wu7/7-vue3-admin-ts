import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);

// 通过调用 app.use(router) 后
// - 我们就可以在任意组件中使用 this.$router 访问到该路由
// - this.$route 的形式访问当前路由
app.use(store).use(router).mount("#app");

app.directive("focus", {
  mounted(el) {
    el.focus();
  },
});
