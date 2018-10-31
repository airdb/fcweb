<template>
<div id="main">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link to="/" class="navbar-brand">{{website}}</router-link>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item" v-for="item in items">
            <a class="nav-link" :href="item.url" target="_blank">{{item.name}}</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search">
          <button class="btn btn-secondary my-2 my-sm-0" type="button">Search</button>
        </form>
      </div>
      <!-- navbar-collapse end -->
    </div>
  </nav>  
  <!-- navbar end -->

  <div class="jumbotron p-0 m-0">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb border-bottom" style="font-size:20px;">
          <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
          <li class="breadcrumb-item"><router-link to="/forum">Forum</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">Article</li>
        </ol>
      </nav>
      <!-- nav end -->
    </div>
    <!-- container end -->
  </div>
  <!-- jumbotron end -->

  <main role="main">
    <div class="container">
      <div class="pt-2 pb-3">
        <div class="btn btn-outline-primary btn-md px-3"><<返回</div>
        <div class="btn btn-outline-primary btn-md px-3">上一主题</div>
        <div class="btn btn-outline-primary btn-md px-3">下一主题</div>
        <div class="btn btn-outline-primary btn-md px-5 float-right">发表主题</div>
        <div class="btn btn-primary btn-md px-5 float-right mr-2">回复主题</div>
      </div>

      <div class="jumbotron row">
        <div class="col-2 border-right">
          <div class="d-inline-block bg-light rounded mb-3 p-2">
            <p class="text-center text-secondary mb-0" style="font-size:10px">浏览 {{article.browseNum}}</p>
          </div>
          <div class="d-inline-block bg-light rounded mb-3 p-2">
            <p class="text-center text-secondary mb-0" style="font-size:10px">回复 {{article.replyNum}}</p>
          </div>
        </div>
        <div class="col-10 pl-3">
          <div class="border-bottom bg-light font-weight-bold pl-3 py-2" style="font-size:25px">
            {{article.title}}
          </div>
        </div>
      </div>
      <!-- row end -->
    </div>
    <!-- container end -->
  </main>
  <!-- main end -->
  
  <footer class="footer">
    <div class="inner">
      <h1>Hello, world!</h1>
      <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
    </div>
  </footer>
</div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      website: '网站首页',
      items: [
        {name: '分类1', url: '/'},
        {name: '分类2', url: '/'},
        {name: '分类3', url: '/'},
        {name: '分类4', url: '/'},
        {name: '分类5', url: '/'},
        {name: '分类6', url: '/'}
      ],
      article: {
        title: 'myTitle',
        content: 'abcdf',
        author: 'MyCql',
        date: '2018-9-9',
        browseNum: 2018,
        replyNum: 2018
      }
    }
  },
  methods: {
  },
  created () {
  }
}
</script>

<style>
.footer {
  padding: 40px;
  background: #373d41;
  color: #9b9ea0;
}
</style>