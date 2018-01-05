<!-- 地图 -->
<template>
  <div class="point" ref="point">
    <div class="main"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china'

export default {
  props: {
    mapData: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      myChart: {},
      //  南海诸岛地图设置
      newData: [{
        name: '南海诸岛',
        value: 0,
        itemStyle: {
          normal: {
            opacity: 0,
            label: {show: false}}
        }
      }]
    }
  },
  computed: {
    //  隐藏南海，初始化区域高亮背景
    getNewData () {
      let colorArr = ['#3679bc', '#c2a520', '#cf3f3d']
      let newList = this.mapData.map((item, index) => {
        let num = parseInt(Math.random() * 3)
        return Object.assign({}, item, {
          itemStyle: {
            emphasis: {
              areaColor: colorArr[num]
            }
          }
        })
      })
      return this.newData.concat(newList)
    }
  },
  mounted () {
    this._getMyChart(this.getNewData)
  },
  methods: {
    _initMap () {
      let that = this
      that.myChart = echarts.init(document.querySelector('.point .main'))
      that.myChart.setOption(that.options)
      that.autoPlay()
      window.addEventListener('resize', function () {
        this.myChart.resize()
      }.bind(that))
    },
    _getMyChart (data) {
      this.options = {
        title: {
          show: false
        },
        tooltip: {
          trigger: 'item',
          backgroundColor: 'rgba(50,50,50,0.7)',
          padding: [5, 10],
          formatter: function (params) {  //  地图提示框样式设置
            let str = `<p style="border-bottom: 1px solid #cbab36; color: #cbab36; font-size: 28px; padding: 10px 0;">本月${params.data.value}次，${params.data.ticketNum}人</p>
                       <p style="font-size: 40px; color: #afd5f1; padding: 15px 0;">${params.data.name}</p>`
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
            }
          },
          data: data
        }]
      }
      this._initMap()
    },
    /**
     * 自动高亮
     * @param options [图例配置信息]
     * @param dataIndex [当前鼠标所在区域的index值]
     */
    autoPlay (options, dataIndex) {
      let that = this
      that.currentIndex = dataIndex || 0
      that.timer = setInterval(function () {
        let dataLen = that.options.series[0].data.length
        // 取消之前高亮的图形
        that.myChart.dispatchAction({
          type: 'mapUnSelect',
          seriesIndex: 0,
          dataIndex: that.currentIndex
        })
        that.currentIndex += 1
        if (that.currentIndex > (dataLen - 1)) {
          that.currentIndex = 1
        }
        // that.currentIndex = (that.currentIndex + 1) % dataLen

        // 高亮当前图形
        that.myChart.dispatchAction({
          type: 'mapSelect',
          seriesIndex: 0,
          dataIndex: that.currentIndex
        })
        // 显示 tooltip
        that.myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: that.currentIndex
        })
      }, 3000)
    }
  },
  watch: {
    mapData () {
      let that = this
      //  监控数据更新，地图配置自动更新（地图无刷新）
      that.myChart.setOption({
        series: [{
          data: that.getNewData
        }]
      })
      console.log(that.options.series[0].data)
      clearInterval(that.timer)
      that._initMap()
    }
  }
}
</script>
<style lang="stylus" scoped>
  .point
    width 110%
    height 100%
    text-align center
    .main
      height 100%
      width 100%
      margin-left -13%
      transition all 0.5s linear
</style>
