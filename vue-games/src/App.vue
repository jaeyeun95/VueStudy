<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/rock">RockScissorsPapper</router-link> |
      <router-link to="/lotto">Lotto</router-link> |
      <router-link to="/tic">Tick</router-link> |
      <router-link to="/mine">MineSweeper</router-link> |
      <router-link to="/route">routeTest</router-link> |
      <router-link to="/game/index">GameMatcher</router-link> |
      <router-link to="/game/hello">GameMatcher22</router-link> |
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
