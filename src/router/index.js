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
      name: 'home',
      meta: {
        title: 'Home | airdb.com'
      },
      component: home
    },
    {
      path: '/tree',
      name: 'Hello Ztree',
      meta: {
        title: 'Tree | airdb.com'
      },
      component: Main
    },
    {
      path: '/signin',
      name: 'signin',
      meta: {
        title: 'signin | airdb.com'
      },
      component: signin
    },
    {
      path: '/signup',
      name: 'signup',
      meta: {
        title: 'signup | airdb.com'
      },
      component: signup
    },
    {
      path: '/signout',
      name: 'signout',
      meta: {
        title: 'signout | airdb.com'
      },
      component: Main
    }
  ]
})
