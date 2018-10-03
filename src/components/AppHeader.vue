<template>
  <nav class="app-navbar">
    <ul>
      <li>Inicio</li>
      <li>Artículos</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "AppHeader",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.app-navbar {
  width: 100%;
  padding: 16px 0;
  border-top: 2px solid #42b983;
  border-bottom: 2px solid #42b983;
  margin: 0 0 50px;
  background-color: #fff;
  ul {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
    li {
      color: #42b983;
      margin: 0 12px 0 0;
      font-size: 14px;
      font-weight: 600;
    }
  }
}
</style>
