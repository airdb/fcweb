import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import SignIn from '@/components/signin'
import Main from '@/views/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Home
    },
    {
      path: '/tree',
      name: 'Hello Ztree',
      component: Main
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/signout',
      name: 'signout',
      component: Main
    }
  ]
})
