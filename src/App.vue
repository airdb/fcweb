<template>
  <div id="app">
    <!--
    <img src="/static/images/wego-bit.png">
    <img src="https://www.airdb.com/logo/wego-bit.png">
    -->
    <router-view v-wechat-title='$route.meta.title'></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
