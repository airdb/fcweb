<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link to="/" class="navbar-brand">{{website}}</router-link>
      
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <router-link to="/forum" class="nav-link"> 论坛 </router-link>
          </li>
          <li class="nav-item">
            <a href="https://github.com/bbhj/intro/projects/1" class="nav-link"> 项目地址 </a>
          </li>
          <li class="nav-item">
            <router-link to="/servicetree" class="nav-link"> 服务树 </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link"> About </router-link>
          </li>
        </ul>
        <!-- ul end -->
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search">
          <button class="btn btn-secondary my-2 my-sm-0" type="button">Search</button>
        </form>
        <!-- form end -->
      </div>
      <!-- navbar-collapse end -->
    </div>
    <!-- container end -->

    <div class="">
      <router-link to="/login" class="text-light px-3 d-inline-block" style="font-size: 13px"> 登陆 </router-link>
      <router-link to="/signin" class="btn btn-primary btn-md rounded-0" style="font-size: 13px"> 注册 </router-link>
    </div>
    <!-- login end -->
  </nav>  
  <!-- navbar end -->
</div>
</template>

<script>
export default {
  data () {
    return {
      website: '网站首页',
      items: [
        {name: '分类1', url: '/'},
        {name: '分类2', url: '/'},
        {name: '分类3', url: '/'},
        {name: '分类4', url: '/'}
      ]
    }
  },
  methods: {
  },
  created () {
  }
}
</script>

<style>
</style>