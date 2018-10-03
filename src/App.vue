<template>
  <div id="app">
    <AppHeader/>
    <AppArticle/>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import AppHeader from "./components/AppHeader.vue";
import AppArticle from "./components/Article.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    AppHeader,
    AppArticle
  }
};
</script>

<style>
html,
body {
  background-color: #f9f9f9;
  margin: 0;
  font-family: "Roboto", sans-serif;
}
#app {
  text-align: center;
  color: #2c3e50;
}
</style>
