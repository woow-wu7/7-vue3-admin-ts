<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/testSetUp">testSetUp</router-link> |
    <router-link to="/testProps">testProps</router-link> |
    <router-link to="/testVModel">testVModel</router-link> |
    <router-link to="/testVif">testVif</router-link> |
    <router-link to="/testSlot">testSlot</router-link> |
    <router-link to="/testMixin">testMixin</router-link> |
    <router-link to="/testHookOrder">testHookOrder</router-link> |
    <router-link to="/testWatch">testWatch</router-link> |
    <router-link to="/testDirective">testDirective</router-link> |
    <router-link to="/testMethodsKey">testMethodsKey</router-link> |
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
