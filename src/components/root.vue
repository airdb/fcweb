<template>
  <el-container>
  <el-header height=100px>
    <div id="root" class="bbb" >
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

  <el-container>
    <el-aside width="300px">
      <div>
      <el-input
        placeholder="搜索"
        v-model="filterText">
      </el-input>
      
      <el-tree
        class="filter-tree"
        :data="data2"
        :props="defaultProps"
        default-expand-all
        :filter-node-method="filterNode"
        ref="tree2">
      </el-tree>
      </div>


      <!--
      </br>

      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
      -->
    </el-aside>
    <el-main width="300px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>

      <el-tag>标签一</el-tag>
      <el-tag type="success">标签二</el-tag>
      <el-tag type="info">标签三</el-tag>
      <el-tag type="warning">标签四</el-tag>
      <el-tag type="danger">标签五</el-tag>

      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </el-main>
  </el-container>
  <!--
  -->
  </el-container>

</template>

<script>
  export default {
    watch: {
      filterText (val) {
        this.$refs.tree2.filter(val)
      }
    },

    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        filterText: '',
        data2: [{
          id: 1,
          label: 'root',
          children: [{
            id: 3,
            label: '二级 2-1',
            children: [{
              id: 4,
              label: '三级 3-1-1'
            }, {
              id: 5,
              label: '三级 3-1-2',
              disabled: false,
              children: [{
                id: 6,
                label: '四级 4-1-2',
                disabled: false,
                children: [{
                  id: 7,
                  label: '五级 5-1-1',
                  disabled: false
                }]
              }]
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      },
      checkLogin () {
        if (!this.getCookie('session')) {
          this.$router.push('/login')
        }
      },
      filterNode (value, data) {
        if (!value) return true
        return data.label.indexOf(value) !== -1
      }
    }
  }
</script>

<style>
  .el-header, {
    width: 100%;
    align: center;
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-footer {
    width: 100%;
    align: center;
    background-color: green;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 600px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 600px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-menu-item {
     font-size: 20px;
     font-weight:bold;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  #root {
    width: 40%;
    padding: 0;
    background-color: #fff;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  
  .aaa {
      border-radius: 8px;
  }
</style>
