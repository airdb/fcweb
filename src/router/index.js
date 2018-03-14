import Vue from 'vue'
import Router from 'vue-router'
import test from '@/components/test'
import transfer from '@/components/transfer'
import tree from '@/components/tree'
import newtree from '@/components/newtree'
import login from '@/components/login'
import navmenu from '@/components/navmenu'
import signin from '@/components/signin'
import signup from '@/components/signup'
import root from '@/components/root'
import Main from '@/components/Main'

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
      component: tree
    },
    {
      path: '/newtree',
      name: 'newtree',
      meta: {
        title: 'New Tree | airdb.com'
      },
      component: newtree
    },
    {
      path: '/navmenu',
      name: 'Hello nav menu',
      meta: {
        title: 'nav menu| airdb.com'
      },
      component: navmenu
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
      path: '/login',
      name: 'login',
      meta: {
        title: 'Sign in to airdb | airdb.com'
      },
      component: login
    },
    {
      path: '/transfer',
      name: 'transfer',
      meta: {
        title: 'transfer | airdb.com'
      },
      component: transfer
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
