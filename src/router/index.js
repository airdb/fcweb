import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import SignIn from '@/components/signin'
import SignUp from '@/components/signup'
import Main from '@/views/Main'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
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
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/signout',
      name: 'signout',
      component: Main
    }
  ]
})
