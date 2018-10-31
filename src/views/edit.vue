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

  <div class="jumbotron p-0">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb border-bottom" style="font-size:20px;">
          <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
          <li class="breadcrumb-item"><router-link to="/forum">Forum</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">Edit</li>
        </ol>
      </nav>
      <!-- nav end -->
    </div>
    <!-- container end -->
  </div>
  <!-- jumbotron end -->

  <main role="main">
    <div class="container">
      

      <div class="d-block">   
        <div class="d-inline px-2 font-weight-bold">发表主题</div>
        <div class="btn btn-primary btn-sm">发表</div>   
      </div>
      <!-- d-inline end -->

      <!--div class="d-flex pl-3 pt-3">
        <div class="d-inline-block mr-1">选择主题</div> 
        <div class="">
          <select name="selectAge" id="selectAge">   
            <option v-for="(option, index) in options" :value="key">{{option}}</option>     
          </select>
        </div>
      </div-->

      <div class="py-3 d-block" style="height:800px">
        <mavon-editor style="height:700px"
          :boxShadow="false"
          @save="$editorSave"
          @imgAdd="$imgAdd" 
          @imgDel="$imgDel">    
      </mavon-editor>
      </div>
      <!-- editor end -->
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
      value: '',
      website: '网站首页',
      items: [
        {name: '分类1', url: '/'},
        {name: '分类2', url: '/'},
        {name: '分类3', url: '/'},
        {name: '分类4', url: '/'},
        {name: '分类5', url: '/'},
        {name: '分类6', url: '/'}
      ]
    }
  },
  methods: {
  },
  created () {
    var E = window.wangEditor
    var editor = new E('#editor')
    // 或者 var editor = new E( document.getElementById('editor') )
    editor.create()
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