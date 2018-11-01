<template>
<div id="main">
  <head-er></head-er>

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

      <div class="row bg-light">
        <div class="col-1 py-2 border-right text-center text-secondary" style="font-size:15px">
          浏览
          {{article.browseNum}}
        </div>
        <div class="col-1 py-2 border-right text-center text-secondary" style="font-size:15px">
          回复
          {{article.replyNum}}
        </div>
        <div class="col-10 pl-3">
          <div class="font-weight-bold pl-2 py-2" style="font-size:25px">
            {{article.title}}
          </div>
        </div>
      </div>
      <!-- row end -->

      <div class="row">
        
      </div>
    </div>
    <!-- container end -->
  </main>
  <!-- main end -->
  
  <foot-er></foot-er>
</div>
</template>

<script>
import headEr from '@/components/header'
import footEr from '@/components/footer'
export default {
  components: {
    headEr,
    footEr
  },
  data () {
    return {
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
</style>