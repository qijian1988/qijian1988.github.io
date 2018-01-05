<!--统计列表-->
<template>
    <div class="statistics">
      <ul class="list">
        <li v-for="(item, index) in dataBase.list" :key="index">
          <span class="province">{{item.name}}</span>
          <span class="data-info">{{item.value}}次 {{item.ticketNum}}人</span>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
      name: 'statistics',
      props: {
        dataBase: {
          type: Object,
          default: null
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.statistics
  float left
  width 540px
  min-height 903px
  margin-left 50px
  margin-top -30px
  padding-bottom 50px
  background url('../assets/dataBg.png') no-repeat center
  background-size cover
  .list
    width 100%
    padding 0 13px
    padding-top 170px
    overflow hidden
    box-sizing border-box
    & > li
      float left
      width 50%
      line-height 40px
      font-size 0
      .province
        display inline-block
        min-width 50px
        vertical-align top
        color #caab37
        font-size 18px
      .data-info
        display inline-block
        text-align right 
        color #a5cded
        font-size 18px
        width 192px
        vertical-align top
        word-wrap break-word
</style>
