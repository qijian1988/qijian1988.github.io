<!-- 散点图 -->
<style lang="stylus" scoped>
.point
  width 100%
  height 100%
  background url('../assets/bg.png') no-repeat
  background-size 100% 100%
  .main
    height 100%
    width 100%
    transition all 0.5s linear
    .bottom-border
      border-bottom 1PX solid #caab37
</style>

<template>
<div class="point">
  <div class="main"></div>
</div>
</template>

<script>
import axios from 'axios'
import echarts from 'echarts'
import 'echarts/map/js/china'

export default {
  created () {
    this._getCityData()
  },
  data () {
    return {
      legendArr: [],
      color: this.$store.state.color,
      myChart: {},
      geoCoordMap: {},
      name: '散点图',
      dataBase: [{ name: '北京', value: 1000 },
        { name: '辽宁', value: 7000 },
        { name: '黑龙江', value: 100 },
        { name: '澳门', value: 90 }
      ]
    }
  },
  methods: {
    _initMap (options) {
      let that = this
      this.myChart = echarts.init(document.querySelector('.point .main'))
      this.myChart.setOption(options)
      that.autoPlay(options)
      that.myChart.on('mousemove', () => {
        clearInterval(that.timer)
      })
      that.myChart.on('mouseout', (param) => {
        if (param.event) {
          that.autoPlay(options)
        }
      })
      window.addEventListener('resize', function () {
        this.myChart.resize()
      }.bind(this))
    },
    _getCityData () {
      axios.get('static/data/cityData.json').then((res) => {
        this.geoCoordMap = res.data
        this.$nextTick(() => {
          this._getMyChart()
        })
      })
    },
    _getMyChart () {
      let options = {
        title: {
          show: false
        },
        tooltip: {
          trigger: 'item',
          backgroundColor: 'rgba(50,50,50,0.5)',
          padding: [5, 10],
          formatter: function (params) {
            let str = `<p style="border-bottom: 1px solid #cbab36; color: #cbab36; font-size: 28px; padding: 10px 0;">本月：${params.value}次，${params.value}人</p>
                       <p style="font-size: 40px; color: #afd5f1; padding: 15px 0;">${params.name}</p>`
            return str
          }
        },
        series: [{
          type: 'map',
          map: 'china',
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              areaColor: '#122940',
              borderColor: '#5c708c'
            },
            emphasis: {
              areaColor: '#cf3f3d'
            }
          },
          data: [
            { name: '北京', value: Math.round(Math.random() * 1000) },
            { name: '天津', value: Math.round(Math.random() * 1000) },
            { name: '上海', value: Math.round(Math.random() * 1000) },
            { name: '重庆', value: Math.round(Math.random() * 1000) },
            { name: '河北', value: Math.round(Math.random() * 1000) },
            { name: '河南', value: Math.round(Math.random() * 1000) },
            { name: '云南', value: Math.round(Math.random() * 1000) },
            { name: '辽宁', value: Math.round(Math.random() * 1000) },
            { name: '黑龙江', value: Math.round(Math.random() * 1000) },
            { name: '湖南', value: Math.round(Math.random() * 1000) },
            { name: '安徽', value: Math.round(Math.random() * 1000) },
            { name: '山东', value: Math.round(Math.random() * 1000) },
            { name: '新疆', value: Math.round(Math.random() * 1000) },
            { name: '江苏', value: Math.round(Math.random() * 1000) },
            { name: '浙江', value: Math.round(Math.random() * 1000) },
            { name: '江西', value: Math.round(Math.random() * 1000) },
            { name: '湖北', value: Math.round(Math.random() * 1000) },
            { name: '广西', value: Math.round(Math.random() * 1000) },
            { name: '甘肃', value: Math.round(Math.random() * 1000) },
            { name: '山西', value: Math.round(Math.random() * 1000) },
            { name: '内蒙古', value: Math.round(Math.random() * 1000) },
            { name: '陕西', value: Math.round(Math.random() * 1000) },
            { name: '吉林', value: Math.round(Math.random() * 1000) },
            { name: '福建', value: Math.round(Math.random() * 1000) },
            { name: '贵州', value: Math.round(Math.random() * 1000) },
            { name: '广东', value: Math.round(Math.random() * 1000) },
            { name: '青海', value: Math.round(Math.random() * 1000) },
            { name: '西藏', value: Math.round(Math.random() * 1000) },
            { name: '四川', value: Math.round(Math.random() * 1000) },
            { name: '宁夏', value: Math.round(Math.random() * 1000) },
            { name: '海南', value: Math.round(Math.random() * 1000) },
            { name: '台湾', value: Math.round(Math.random() * 1000) },
            { name: '香港', value: Math.round(Math.random() * 1000) },
            { name: '澳门', value: Math.round(Math.random() * 1000) }
          ]
        }]
      }
      this._initMap(options)
    },
    autoPlay (options) {
      let that = this
      let currentIndex = -1
      that.timer = setInterval(function () {
        var dataLen = options.series[0].data.length
        // 取消之前高亮的图形
        that.myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: currentIndex
        })
        currentIndex = (currentIndex + 1) % dataLen
        // 高亮当前图形
        that.myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: currentIndex
        })
        // 显示 tooltip
        that.myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex
        })
      }, 1000)
    }
  },
  components: {
    // 'v-header': header,
    // 'v-filter': filter
  }
}
</script>
