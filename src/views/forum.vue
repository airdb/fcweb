<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a href="" class="navbar-brand">宝贝回家</a>
      <!-- navbar-header end -->
      
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

  <main role="main">
    <div class="jumbotron pb-2 pt-0">
      <div class="container">
        <nav aria-label="breadcrumb" class="">
          <ol class="breadcrumb border-bottom" style="font-size:20px;">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Library</a></li>
            <li class="breadcrumb-item active" aria-current="page">Data</li>
          </ol>
        </nav>
        <!-- nav end -->

        <h2 class="display-4">宝贝回家论坛</h2>
        <p class="pb-5">This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
        <!-- p end -->
        
        <div class="row">
          <div class="col-10"> 
            <nav>
              <ul class="pagination">
                <li class="page-item disabled">
                  <a class="page-link" href="#" tabindex="-1">Previous</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item active">
                  <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                </li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
            <!-- nav end -->
          </div>
          <!-- col-9 end -->
          <div class="col-2 float-right">
            <a href="#" class="btn btn-primary btn-md" role="button">发表主题</a>
          </div>
          <!-- col-3 end -->
        </div>
        <!-- row end -->
      </div>
    </div>
    <!-- jumbotron end -->

    <div class="container">
      <div class="card" v-for="item in items">
        <div class="card-body">
          <img class="mr-3" src="../assets/img1.jpg" width="40px" height="40px">
          This is some text within a card body.
        </div>
      </div>
      <!-- card end -->
      <div class="media py-3 border-bottom" v-for="item in items">
        <img class="mr-3" src="../assets/img1.jpg" width="40px" height="40px">
        <div class="media-body">
          <h5 class="mt-0 text-primary">Media heading</h5>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
        </div>
      </div>
      <!-- media end -->
      <div class="jumbotron mb-1 p-3" v-for="item in items">
        <img src="../assets/img1.jpg" width="40px" height="40px">
        {{item.name}}
      </div>
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