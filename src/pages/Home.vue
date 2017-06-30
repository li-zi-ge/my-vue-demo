<template>
  <div class="home-page">
    <mt-swipe :auto="4000">
      <mt-swipe-item class='slide1'>1</mt-swipe-item>
      <mt-swipe-item class='slide2'>2</mt-swipe-item>
      <mt-swipe-item class='slide3'>3</mt-swipe-item>
    </mt-swipe>
    <div>
      <div class="index_nav_list row">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'home'
    }
  },
  created () {
    this.$emit('title', '首页')
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mint-swipe{
    height: 250px;
  }
  .slide1{
    background-color: #ff0000;
  }
  .slide2{
    background-color: #00ff00;
  }
  .slide3{
    background-color: #0000ff;
  }
</style>
