<template>
  <div id="app">
    <v-head></v-head>
    <statistics v-if="dataBase" :dataBase="dataBase"></statistics>
    <div class="map" v-if="flag">
      <v-map :mapData="mapData"></v-map>
    </div>
  </div>
</template>

<script>
  import VHead from 'components/VHead'
  import Statistics from 'components/statistics'
  import VMap from 'components/map'
  import flyio from 'flyio'
  export default {
    name: 'app',
    data () {
      return {
        dataBase: {},
        mapData: [],
        flag: false
      }
    },
    created () {
      let that = this
      that.getData('../../static/data.json', {flag: '0'}, that.getMonthData)
      that.getData('../../static/data.json', {flag: '1'}, that.getMapData)
      that.timer()
    },
    methods: {
      getData (url, param, fn) {
        // let url = !/localhost/g.test(window.location.origin) ? `${window.location.origin}/pdm/sys/statistics/statisticsNum` : '../../static/data.json'
        flyio.get(url, {param: param}).then(res => {
          if (res.data.code === '0') {
            typeof fn === 'function' && fn(res.data.data)
          }
        }).catch(err => {
          console.log(err)
        })
      },
      getMonthData (res) {
        this.dataBase = res
      },
      getMapData (res) {
        this.mapData = res.list
        this.flag = true
      },
      timer () {
        let that = this
        setInterval(() => {
          that.getData('../../static/add.json', {flag: '1'}, that.getMapData)
          let now = new Date()
          let H = now.getHours()
          let M = now.getMinutes()
          console.log(M)
          if (H === 9 && M === 0) {
            that.getData({flag: '0'}, that.getMonthData)
          }
        }, 60000)
      }
    },
    components: {
      VHead,
      Statistics,
      VMap
    }
  }
</script>

<style lang="stylus">
  @import "./assets/css/reset.css";
  html,body,#app
    width 100%
    height 100%
  #app
    background url('./assets/bg.png') no-repeat center
    background-size cover
    overflow auto
    overflow-x hidden    
    & > .map
      float left
      width calc(100% - 590px)
      height calc(100% - 165px)
      // pointer-events none
</style>
