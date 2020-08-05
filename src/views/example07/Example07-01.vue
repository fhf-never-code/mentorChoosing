<template>
  <div>
    <h1>axios基本请求</h1>
    <p>
      基本get请求测试
      <br />
      <button @click="getUser">getUser</button>
      <br />
      匹配表达式测试
    </p>
    <button @click="getHomework">getHomework</button>
    <p>{{ user.userId }} / {{ user.userName }}</p>
    <hr />
    <p>
      post请求测试
      <br />
      <button @click="login">login</button>
    </p>
  </div>
</template>
<script>
import axios from "@/axios/MyAxios.js"; //axios其实不应该放在组件中 仅用于演示这次
export default {
  data: () => ({
    user: {
      userName: null,
      userId: null
    }
  }),
  methods: {
    // getUser() {
    //   axios.get("users/14").then(resp => {  
    //get本身就是一个异步的方法  返回一个promise对象 用回调模式.then执行回调 resp 是响应对象
    //     console.log(resp);
    //     this.user = resp.data.user;
    //   });
    // },

    async getUser() {
      let resp = await axios.get("users/12"); //写到这变成了同步的写法 等结果回来之后才执行后续操作
      this.user = resp.data.user;
    },

    getHomework() {
      axios.get("users/12/homeworks/232").then(resp => {
        this.user = resp.data.user;
      });
    },
    login() {
      
      axios
        .post("login", {    //两个参数 向哪里发送和发送的对象
          number: 1001,
          password: "123456"
        })
        .then(resp => {
          alert(resp.headers["Authorization"]+"登陆成功");//把响应的头拿出来
          // this.user = resp.data.user;
        }).catch((err)=>{
         alert('登录失败')

        });
    }
  }
};
</script>
