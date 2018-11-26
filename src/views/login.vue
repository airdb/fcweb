<template>
<div>
  <head-er></head-er>

  <main role="main">

    <div class="container">
      <div class="row"> 
        <div class="col-md-9 col-sm-8">
            
        </div>
        <!-- col-md-9 end -->

        <div class="col-md-3 col-sm-4">
          <div id="login_code_id">
            
          </div>
        </div>
        <!-- col-md-3 end -->
      </div>
      <!-- row end -->
    </div>
    <!-- container end -->
  </main>
  <!-- main end -->
  
  <foot-er></foot-er>
</div>
</template>

<script>
import headEr from '@/components/header'
import footEr from '@/components/footer'
import WxLogin from 'http://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js'

export default {
  components: {
    headEr,
    footEr
  },
  data () {
    return {
    }
  },
  methods: {
  },
  created () {
    var obj = new WxLogin({
      self_redirect: true,
      id: 'login_code_id',
      appid: 'wxb2a310377819aebd',
      scope: 'snsapi_login',
      redirect_uri: 'https://wechat.baobeihuijia.com/lastest/wechatapi/small/config',
      state: '',
      style: 'white',
      href: ''
    })
  }
}
</script>

<style>
</style>
