<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/dataBinding">DataBinding</router-link> | <!-- router-link는 a태그 기반-->
    <router-link to="/listBinding">ListBinding</router-link> |
    <router-link to="/ifBinding">IfBinding</router-link> |
    <router-link to="/onEvent">onEvent</router-link> |
    <router-link to="/option">option</router-link> |
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
