import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Main from '@/views/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/tree',
      name: 'Hello Ztree',
      component: Main
    }
  ]
})
