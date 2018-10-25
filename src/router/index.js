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
import home from '@/views/home'
import bbs from '@/views/bbs'
import forum from '@/views/forum'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
//  mode: 'history',
  routes: [
    { meta: { title: 'Home     | airdb.com' }, path: '/', name: 'root', component: home },
    { meta: { title: 'root     | airdb.com' }, path: '/servicetree', name: 'servicetree', component: root },
    { meta: { title: 'bbs      | airdb.com' }, path: '/bbs', name: 'bbs', component: bbs },
    { meta: { title: 'forum    | airdb.com' }, path: '/forum', name: 'forum', component: forum },
    { meta: { title: 'Test     | airdb.com' }, path: '/test', name: 'test', component: test },
    { meta: { title: 'Tree     | airdb.com' }, path: '/tree', name: 'Hello Ztree', component: tree },
    { meta: { title: 'New Tree | airdb.com' }, path: '/newtree', name: 'newtree', component: newtree },
    { meta: { title: 'nav menu | airdb.com' }, path: '/navmenu', name: 'Hello nav menu', component: navmenu },
    { meta: { title: 'signin   | airdb.com' }, path: '/signin', name: 'signin', component: signin },
    { meta: { title: 'signup   | airdb.com' }, path: '/signup', name: 'signup', component: signup },
    { meta: { title: 'Sign in  | airdb.com' }, path: '/login', name: 'login', component: login },
    { meta: { title: 'transfer | airdb.com' }, path: '/transfer', name: 'transfer', component: transfer },
    { meta: { title: 'signout  | airdb.com' }, path: '/signout', name: 'signout', component: Main }
  ]
})
