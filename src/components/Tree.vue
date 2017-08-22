<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <div style='width:280px;'>
      <vue-ztree :list.sync='ztreeDataSource' :func='nodeClick' :expand='expandClick' :contextmenu='contextmenuClick' :is-open='true'></vue-ztree>
    </div>
  </div>
</template>

<script>
import vueZtree from './components/vue-ztree.vue'

export default {
  name: tree,
  data () {
    return {
      msg: 'Hello Vue-Ztree-2.0!',
      ztreeDataSource:[{
                id:1,
                name:"音乐",
                children:[],
                url:"http://www.baidu.com"
      },{
          id:2,
          name:"视频",
          children:[{
             id:3,
             name:"电影",
             children:[{
                id:4,
                name:"国产电影",
                url:""
             },{
                id:5,
                name:"好莱坞电影",
                url:""
             },{
                id:6,
                name:"小语种电影",
                url:""
             }]
          },{
             id:7,
             name:"短片",
             children:[{
                id:9,
                name:"电视剧",
                url:""
             },{
                id:10,
                name:"短片",
                url:""
             }]
          }]
      }]
    }
  },
  methods:{
    // 点击节点
    nodeClick:function(m){
       console.log(JSON.parse(JSON.stringify(m)));
    },
    // 右击事件
    contextmenuClick:function(){
       console.log("触发了自定义的contextmenuClick事件");
    },
    // 点击展开收起
    expandClick:function(m){
       console.log(JSON.parse(JSON.stringify(m)));
       // 点击异步加载
       if(m.isExpand) {
          // 动态加载子节点, 模拟ajax请求数据
         // 请注意 id 不能重复哦。
         if(m.hasOwnProperty("children")){
            
            m.loadNode = 1; // 正在加载节点

            setTimeout(()=>{

              m.loadNode = 2; // 节点加载完毕

              m.isFolder = !m.isFolder; 

              m.children.push({
                  id:+new Date(),
                  name:"动态加载节点1",
                  path:"",
                  clickNode:false,
                  isFolder:false,
                  isExpand:false,
                  loadNode:0,
                  children:[{
                        id:+new Date()+1,
                        name:"动态加载末节点",
                        path:"",
                        clickNode:false,
                        isExpand:false,
                        isFolder:false,
                        loadNode:0
                  }]
              })
            },1000)
            
         }
       }
    }
  },
  components:{
    vueZtree
  }
}
</script>

<style>
body {font-family: Helvetica, sans-serif;}
</style>
