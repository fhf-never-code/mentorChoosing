<template>
  <div id="app">
    <sidebar id="sidebar" />
    <!-- <router-link to="/src/views/sidebar.vue" >sidebar</router-link>//类似超链接的一个组件切换连接 -->
    <router-view id="router" />
  </div>
</template>

<script>
import sidebar from "@/views/sidebar"

export default {
  components: { sidebar }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  margin-top: 20px;
}
#sidebar{
  width: 300px;
  display: inline-block;
  border:1px red solid
}
#router{
  width: 300px;
  display: inline-block;
  /* border: 1px red solid; */
}

</style>
