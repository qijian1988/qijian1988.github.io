<template>
    <div class="header">
      <img src="../assets/logo.png" alt="" class="logo">
      <img src="../assets/title.png" alt="" class="title">
    </div>
</template>

<script>
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.header
  width 100%
  text-align center
  position relative
  & > .logo
    position absolute
    top 45px
    left 52px
    width 218px
    height 66px
  & > .title
    width 976px
    height 144px
</style>
