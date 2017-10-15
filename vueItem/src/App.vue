<template>
  <div>
    <m-head></m-head>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHead from 'components/m-header/m-header'
  import Tab from 'components/tab/tab'
  import {mapActions} from 'vuex'

  export default {
    created() {

    },
    methods: {

    },
    components: {
      MHead, Tab
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
