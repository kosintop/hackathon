<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{name:'testerList'}">Tester</router-link> |
      <router-link to="corporate">Corporate</router-link>
    </div>
    <router-view/>
	<component :is="'script'" src="https://static.landbot.io/landbot-3/landbot-3.0.0.js" async></component>
  </div>
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
