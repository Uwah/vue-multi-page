<template>
  <div id="app">
      <h3>{{message}}</h3>
      <a href="about.html">go about</a>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
      message: "index multi page "
  }),
  mounted() {
      console.log("multi page index init")
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
