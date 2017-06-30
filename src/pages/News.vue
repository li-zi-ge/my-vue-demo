<template>
  <div class="news-page">
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'hello'
    }
  },
  created () {
    this.$emit('title', '消息')
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      console.log('切换到该路由则调用方法查询数据')
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
