<template>
  <div>
    <table class="mainMenu">
      <tr>
        <td width="30%">
          <router-link to="/find">
            <i class="find icon"></i><br>
            <span>发现音乐</span>
          </router-link>
        </td>
        <td width="30%">
          <router-link to="/myMusic">
            <i class="myMusic icon"></i><br>
            <span>我的音乐</span>
          </router-link>
        </td>
        <td width="20%">
          <router-link to="/friends">
            <i class="friends icon"></i><br>
            <span>朋友</span>
          </router-link>
        </td>
        <td width="20%">
          <router-link to="/account">
            <i class="account icon"></i><br>
            <span>账号</span>
          </router-link>
        </td>
      </tr>
    </table>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  .mainMenu
    position fixed
    bottom 0
    left 0
    width 100%
    height 145px
    text-align center
    background rgba(29, 29, 31, 0.7)
    font-size 0
    a
      display inline-block
      color: #a7a7a7
      font-size 40px
      &.active
        color #fff
        .find
          background url("../../assets/find_checked.png") center
          background-size cover
        .myMusic
          background url("../../assets/myMusic_checked.png") center
          background-size cover
        .friends
          background url("../../assets/friends_checked.png") center
          background-size cover
        .account
          background url("../../assets/account_checked.png") center
          background-size cover
      & > .icon
        display inline-block
      & > .find
        width 92px
        height 68px
        background url("../../assets/find.png") center
        background-size cover
      & > .myMusic
        width 68px
        height 68px
        background url("../../assets/myMusic.png") center
        background-size cover
      & > .friends
        width 68px
        height 68px
        background url("../../assets/friends.png") center
        background-size cover
      & > .account
        width 68px
        height 68px
        background url("../../assets/account.png") center
        background-size cover
</style>
