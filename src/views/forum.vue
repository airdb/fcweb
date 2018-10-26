<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a href="" class="navbar-brand">宝贝回家</a>      
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
      <div class="row px-3 mb-2">
        <ul class="nav nav-pills" style="font-size:10px">
          <li class="nav-item">
            <a class="nav-link active" href="#">全部</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">精华</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">投票</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">辩论</a>
          </li>
        </ul>
        <!-- ul end -->
        <form class="form-inline float-right ml-3">
          <input class="form-control form-control-sm" type="search" placeholder="Search">
          <button class="btn btn-outline-secondary btn-sm" type="button">Search</button>
        </form>
        <!-- form end -->
      </div>
      <!-- row end -->

      <div class="border-bottom bg-light d-flex pl-3">
        <span style="font-size:15px">排序：</span>
      </div>
      <div class="media pt-3 border-bottom" v-for="item in items">
        <img class="mr-3" src="../assets/img1.jpg" width="40px" height="40px">
        <div class="media-body row">
          <div class="col-10">
            <h5 class="mt-0 text-primary"><a href="#">Media heading</a></h5>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</p>
          </div>
          <!-- col-9 end -->
          <div class="col-2">
            <div class="d-inline-block bg-light mb-3 rounded p-2" style="width:60px">
              <p class="text-center text-secondary mb-0" style="font-size:10px">浏览 2018</p>
            </div>
            <div class="d-inline-block bg-light mb-3 rounded p-2" style="width:60px">
              <p class="text-center text-secondary mb-0" style="font-size:10px">回复 2018</p>
            </div>
          </div>
          <!-- col-3 end -->
        </div>
        <!-- media-body end -->
      </div>
      <!-- media end -->

      <div class="card mb-1" v-for="item in items">
        <div class="card-body">
          <img class="mr-3" src="../assets/img1.jpg" width="40px" height="40px">
          This is some text within a card body.
        </div>
      </div>
      <!-- card end -->

      <div class="jumbotron mb-1 p-3" v-for="item in items">
        <img src="../assets/img1.jpg" width="40px" height="40px">
        {{item.name}}
      </div>
      <!-- jumbotron end -->

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