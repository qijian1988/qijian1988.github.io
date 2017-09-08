<template>
    <div>
      <div class="findHead">
        <img src="../../assets/voice.png" alt="" class="voice">
        <input type="text" placeholder="搜索音乐、歌词、电台">
        <img src="../../assets/ph.png" alt="" >
      </div>
      <div class="findMenu">
        <router-link to="/personalAdvice">个性推荐</router-link>
        <router-link to="/songsList">歌单</router-link>
        <router-link to="/radio">主播电台</router-link>
        <router-link to="/rankingList">排行榜</router-link>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
.findHead
  width 100%
  height 190px
  background #d43c33
.findMenu
  display flex
  justify-content space-around
  a
    color #323233
    &.active
      color #d43c33
</style>
