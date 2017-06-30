import Vue from 'vue'
import Router from 'vue-router'
import News from '@/pages/News'
import Home from '@/pages/Home'
import User from '@/pages/User'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
router.afterEach((to, from, next) => {
  if (to) {
  }
})

export default router
