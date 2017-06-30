<template>
  <div id="app">
    <mt-header fixed :title='msg'></mt-header>
    <router-view v-on:title="changeTitle"></router-view>
    <mt-tabbar v-model="select">
      <mt-tab-item id="Home">
        <img slot="icon" src="./assets/100x100.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="News">
        <img slot="icon" src="./assets/100x100.png">
        消息
      </mt-tab-item>
      <mt-tab-item id="User">
        <img slot="icon" src="./assets/100x100.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'app',
      select: 'Home',
      msg: '首页'
    }
  },
  watch: {
    select (newTab) {
      console.log(newTab)
      this.$router.push({name: newTab})
    }
  },
  methods: {
    changeTitle (newTitle) {
      console.log(newTitle)
      this.msg = newTitle
      document.title = newTitle
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
div[class*='-page'] {
position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
</style>
