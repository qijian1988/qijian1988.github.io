<template>
  <div id="app">
    <v-head :seller='seller'></v-head>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import head from './components/header/header'
  const ERR_OK = 0
  export default {
    name: 'app',
    data () {
      return {
        seller: {}
      }
    },
    created () {
      this.$http.get('/api/seller').then((response) => {
      response = response.body
      if( response.errno === ERR_OK ){
            this.seller = response.data
            console.log(this.seller)
          }
      });
    },
    components: {
      'v-head': head
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
<<<<<<< HEAD
 @import './common/stylus/mixin.styl'
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-1px(rgba(7,17,27,0.1))
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
        &.active
          color: rgb(240,20,20)
=======
@import './common/stylus/index.styl'
  .tab
      display flex
      width 100%
      height 40px
      line-height 40px
      border-1px(rgba(7,17,27,0.1))
  .tab-item
    flex 1
    text-align  center
    & > a
      display block
      font-size 14px
      color rgb(77, 85, 93)
      &.active
        color rgb(240,20,20)
>>>>>>> origin/master
</style>
