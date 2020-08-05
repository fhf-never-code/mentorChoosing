<template>
  <div>
    <p>在router启用props支持。在vue props属性中声明同名变量</p>
    studentID: {{ sid }}
    <br />
    homeworksID: {{ hid }}
    <br />
    也可通过$route.params调用
    <br />
    {{ $route.params.sid }}
    <hr />
    {{ getTitle }}
  </div>
</template>
<script>
export default {
  props: ["sid", "hid"],
  data: () => ({
    homeworks: [
      { id: 1, title: "spring" },
      { id: 2, title: "springMVC" },
      { id: 3, title: "JPA" }
    ]
  }),
  created() {
    console.log(this.$route.params.sid);// 没有被销毁 在下一次调用的时候自然也就不会创建和回调
  },
//   beforeUpdate() {       //当数据改变需要重新渲染之前回调这个方法
//     console.log(this.$route.params.sid);
//   },
//   beforeRouteUpdate(to, from, next) { //三个参数 路由改变时触发回调 to是上哪里去 from从哪里来 
//   //next函数是为了往下走 没有next函数就不会往下执行 可做（不推荐）权限检验
//     console.log("beforeRouterUpdate()");
//     next();
//   },
  computed: {
    getTitle() {
      return this.homeworks.find(a => a.id == this.hid).title;
    }
  }
};
</script>
