<template>
  <div id="app">
  
       <!-- <sidebar id="sidebar" />
    <router-view id="router" v-bind:key="$route.path" /> <alertdialog></alertdialog> -->
    <!-- <router-link to="/src/views/sidebar.vue" >sidebar</router-link>//类似超链接的一个组件切换连接 -->
    <!-- <keep-alive>   缓存其中的组件对象 适合组件间切换时保存数据用 -->
    <!-- 复用组件 只刷新数据以减少系统开销 -->
      
        <router-view>   <login /> </router-view>
      <!-- key是唯一标识符 唯一变了的是上面的路径 $路由对象的路径 这样更改之后就不会复用 (因为vue组件的切换创建销毁开销都不太大) -->
    <!-- </keep-alive> -->
  </div>
</template>

<script>
import sidebar from "@/views/sidebar"
import login from "@/views/login/Login"
export default {
  components: {   } //组件随时加随时用
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
#sidebar{
  width: 300px;
  display: inline-block;
  border:1px red solid
  
}
#router{
  width: 300px;
  display: inline-block;
  border: 1px blue solid;
  position: fixed;
}

</style>
