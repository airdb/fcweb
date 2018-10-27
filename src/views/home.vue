<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link to="/home" class="navbar-brand">宝贝回家</router-link>
      
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <router-link to="/servicetree" class="nav-link"> 服务树 </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/root" class="nav-link"> 根目录 </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/forum" class="nav-link"> 论坛 </router-link>
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
  </nav>  
  <!-- navbar end -->

  <div role="main">
    <section class="jumbotron text-center">
      <div class="container">
        <h1 class="jumbotron-heading">Album example</h1>
        <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
        <p>
          <a href="#" class="btn btn-primary my-2">Main call to action</a>
          <a href="#" class="btn btn-secondary my-2">Secondary action</a>
        </p>
      </div>
    </section>
    <!-- section end -->

    <div class="container">
      <div class="row"> 
        <div class="col-md-9 col-sm-8">
            <h3>热门精华</h3>
            <hr>
            <div class="jumbotron">
              <h1>Hello, world!</h1>
              <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
              <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
            </div>

            <h3>云专栏</h3>
            <hr>
            <div class="jumbotron">
              <h1>Hello, world!</h1>
              <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
              <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
            </div>

            <h3>友情链接</h3>
            <hr>
            <div class="jumbotron">
              <h1>Hello, world!</h1>
              <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
              <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
            </div>

            <h3>友情链接</h3>
            <hr>
            <div class="jumbotron">
              <h1>Hello, world!</h1>
              <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
              <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
            </div>
        </div>
        <!-- col-md-9 end -->

        <div class="col-md-3 col-sm-4">
          <h3>hello</h3>
          <div class="jumbotron">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.
            </p>
          </div>
          <h3>hello</h3>
          <div class="jumbotron">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.
            </p>
          </div>
          <h3>hello</h3>
          <div class="jumbotron">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.
            </p>
          </div>
        </div>
        <!-- col-md-3 end -->
      </div>
      <!-- row end -->
    </div>
    <!-- container end -->
  </div>
  <!-- main end -->
  
  <div class="footer">
    <div class="inner">
      <h1>Hello, world!</h1>
      <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {name: '宝贝回家', url: 'http://yq.aliyun.com/'},
        {name: '宝贝回家', url: 'http://yq.aliyun.com/'},
        {name: '宝贝回家', url: 'http://yq.aliyun.com/'},
        {name: '宝贝回家', url: 'http://yq.aliyun.com/'},
        {name: '宝贝回家', url: 'http://yq.aliyun.com/'},
        {name: '宝贝回家', url: 'http://yq.aliyun.com/'},
        {name: '宝贝回家', url: 'http://yq.aliyun.com/'}
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
.footer {
  padding: 40px;
  background: #373d41;
  color: #9b9ea0;
}
</style>