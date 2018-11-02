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
        <router-link to="/forum" class="btn btn-outline-primary btn-md px-3"><<返回</router-link>
        <router-link to="" class="btn btn-outline-primary btn-md px-3">上一主题</router-link>
        <router-link to="" class="btn btn-outline-primary btn-md px-3">下一主题</router-link>

        <router-link to="/forum/edit" class="btn btn-primary btn-md px-5" style="margin-left:450px">发表主题</router-link>
        <router-link to="/forum/edit" class="btn btn-primary btn-md px-5 mr-2">回复主题</router-link>
      </div>

      <div class="row bg-light">
        <div class="col-1 py-2 border-right text-center text-secondary" style="font-size:15px">
          浏览
          {{article.browseNum}}
        </div>
        <!-- col-1 end -->
        <div class="col-1 py-2 border-right text-center text-secondary" style="font-size:15px">
          回复
          {{article.replyNum}}
        </div>
        <!-- col-1 end -->
        <div class="col-10">
          <div class="font-weight-bold text-truncate pl-2 py-2" style="font-size:25px">
            {{article.title}}
          </div>
        </div>
        <!-- col-10 end -->
      </div>
      <!-- row end -->

      <div class="row mt-1 border-bottom border-secondary" v-for="item, index in items" :key="index">
        <div class="col-2 bg-light">
          <img src="../../assets/img2.jpg" class="mt-3 border" width="160px" height="160px">
          <div class="text-center text-primary mt-2" style="font-size:20px">
            {{article.author}}
          </div>
          <div class="text-left text-secondary mt-2 ml-3" style="font-size: 12px">
            发帖数<span class="ml-5">{{article.postNum}}</span>
            <br>
            粉丝数<span class="ml-5">{{article.fansNum}}</span>
          </div>
        </div>
        <!-- col-2 end -->
        <div class="col-10">
          <div class="text-secondary py-2 border-bottom mb-1">
            <span class="text-danger">楼主  </span>发表于：{{article.date}}
            <span class="float-right">{{index+1}} 楼</span>
          </div>
          <!-- header end -->

          <div class="text-center">
            <img src="../../assets/img4.jpeg" width="300px" height="300px">
          </div>
          <!-- content-img end -->
          <div class="mt-3">
            {{article.content}}
          </div>
          <!-- content-text end -->

          <div class="my-5 text-center">
            <router-link to="" class="btn btn-outline-primary btn-sm mr-2">收藏</router-link>
            <router-link to="" class="btn btn-outline-primary btn-sm">关注</router-link>
          </div>
          <!-- footer end -->
        </div>
        <!-- col-10 end -->
      </div>
      <!-- row end -->

      <div class="row my-2">
        <div class="btn btn-outline-secondary btn-md" style="width:100%">下一页>></div>
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
        title: '[男孩] 约1992年出生1998年9月被拐至湖南省岳阳市的张华寻亲352456bbhj',
        author: 'MyCql',
        fansNum: 2019,
        postNum: 10000,
        date: '2018-9-9',
        browseNum: 2018,
        replyNum: 2018,
        content: '寻亲类别：宝贝寻家 寻亲编号：352456 姓 名：张华 性 别：男',
        imgUrl: '../../assets/img2.jpg'
      },
      items: [1, 2, 3]
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