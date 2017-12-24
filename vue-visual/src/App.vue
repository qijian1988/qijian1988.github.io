<template>
  <div id="app">
    <point></point>
  </div>
</template>

<script>
import Point from 'components/point'

export default {
  name: 'app',
  components: {
    Point
  }
}
</script>

<style>
  @import "../static/css/reset.css";
  html,body,#app{
    width: 100%;
    height: 100%;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
