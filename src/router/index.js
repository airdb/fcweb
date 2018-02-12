import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import signin from '@/components/signin'
import signup from '@/components/signup'
import Main from '@/views/Main'

Vue.use(Router)

export default new Router({
//  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },
    {
      path: '/tree',
      name: 'Hello Ztree',
      component: Main
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/signin',
      name: 'signin',
      component: signin
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/signout',
      name: 'signout',
      component: Main
    }
  ]
})
