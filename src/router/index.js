import Vue from 'vue'
import Router from 'vue-router'
import test from '@/components/test'
import signin from '@/components/signin'
import signup from '@/components/signup'
import root from '@/components/root'
import Main from '@/views/Main'

Vue.use(Router)

export default new Router({
//  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      meta: {
        title: 'root | airdb.com'
      },
      component: root
    },
    {
      path: '/test',
      name: 'test',
      meta: {
        title: 'Test | airdb.com'
      },
      component: test
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
