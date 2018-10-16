<template>
  <div id="app">
    <!--
    <img src="/static/images/wego-bit.png">
    <img src="https://www.airdb.com/logo/wego-bit.png">
    -->
    <router-view v-wechat-title='$route.meta.title'></router-view>
  </div>
</template>

<script src="https://rescdn.qqmail.com/node/ww/wwopenmng/js/sso/wwLogin-1.0.0.js"></script>
<script>
export default {
  name: 'app'
}
</script>
