// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

import VueWechatTitle from 'vue-wechat-title'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)

import '../theme/index.css'
import VueSession from 'vue-session'
Vue.use(VueSession)
// Vue.use(VueSession, options)

Vue.use(ElementUI)
Vue.use(VueWechatTitle)
Vue.use(VueResource)

// import {Button, Select} from 'element-ui'
// Vue.component(Button.name, Button)
// Vue.component(Select.name, Select)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
