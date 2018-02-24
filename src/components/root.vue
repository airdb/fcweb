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
  <!--
  <el-aside height="1000px" width="300px">
  aside
  </el-aside>
  <el-main height="1000px" width="300px">
  main
  </el-main>
  <el-footer>
  footer
  </el-footer>
  -->
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
#root {
    width: 80%;
    padding: 0;
    margin: 0 auto;
    }
.el-menu-item {
   font-size: 20px;
   font-weight:bold;
}

.aaa {
    border-radius: 8px;
}

</style>
