<template>
<div>
  <nav class="header navbar navbar-inverse navbar-static-top">
    <div class="container">
      <div class="navbar-header navbar-left" >
        <a href="" class="navbar-brand">宝贝回家</a>
      </div>
      <!-- navbar-header end -->
      
      <div class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <li class="nav-item" v-for="item in items">
            <a class="nav-link" :href="item.url" target="_blank">{{item.name}}</a>
          </li>
        </ul>
        <form class="navbar-form navbar-right">
          <input class="form-control" type="text" placeholder="Search">
          <button class="btn" type="button">Search</button>
        </form>
      </div>
      <!-- navbar-collapse end -->
    </div>
  </nav>  
  <!-- navbar end -->

  <div class="main container">
    <div class="page-header">
      <h1>Hello World</h1>
    </div>

    <!-- page-header end -->
    <div class="row">
      
      <div class="col-md-9 col-sm-8">
        <div class="row">
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
        </div>
      </div>
      <!-- col-md-9 end -->
      <div class="col-md-3 col-sm-4">
        <h3>hello</h3>
        <div class="well">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.
          </p>
        </div>
        <h3>hello</h3>
        <div class="well">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.
          </p>
        </div>
        <h3>hello</h3>
        <div class="well">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.
          </p>
        </div>
      </div>
      <!-- col-md-3 end -->
    </div>
    <!-- row end -->
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