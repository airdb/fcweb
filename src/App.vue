<template>
  <div id="app">
    <img src="https://srehub.github.io/public/images/logo.png">
    <router-view v-wechat-title='$route.meta.title'></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
