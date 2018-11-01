<template>
<div id="main">
  <head-er></head-er>

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
        <div class="btn btn-primary btn-sm px-3">发表</div>
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
</style>