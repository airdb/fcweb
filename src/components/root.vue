<template>
  <el-container>
  <el-header background-color="red">
  <div id="root">
    <el-menu :default-active="activeIndex" background-color="#ddd" active-text-color="#eee" mode="horizontal" class="aaa" @select="handleSelect">
      <el-menu-item index="1">Home</el-menu-item>
      <el-menu-item index="2">Projects</el-menu-item>
      <el-menu-item index="3">Services</el-menu-item>
      <el-menu-item index="4">Downloads</el-menu-item>
      <el-menu-item index="5"><a href="http://docs.airdb.com" target="_blank">Docs</a></el-menu-item>
      <el-menu-item index="6">About</el-menu-item>
    </el-menu>
  </div>
  </el-header>
  <el-aside height="1000px" width="300px">
  aside
  <i type="primary" class="el-icon-info"></i>
  <el-button type="primary" icon="el-icon-search">搜索</el-button>
  </el-aside>
  <!--
  <el-main height="1000px" width="300px">
  main
  </el-main>
  -->
  <el-footer>
  footer
  </el-footer>
  </el-container>

</template>

<script>
  export default {
    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style>
  .el-header, .el-footer {
    width: 70%;
    background-color: red;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-menu-item {
     font-size: 20px;
     font-weight:bold;
  }
</style>

<!--
<style>
#root {
    width: 80%;
    padding: 0;
    margin: 0 auto;
    }

.aaa {
    border-radius: 8px;
}

</style>
-->
