<template>
  <div id="app">
    <main-menu></main-menu>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import mainMenu from './components/mainMenu/menu.vue'

  export default {
    name: 'app',
    components: {
      mainMenu
    },
    created() {
      this.$store.dispatch('getData');
      console.log(this.$store.state.data)
    },
    methods: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  html, body
    width 100%
    height 100%
    background #eee

</style>
