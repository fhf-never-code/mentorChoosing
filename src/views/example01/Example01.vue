<template>
<div>   
  <h1>Welcome</h1>
  <router-link to="sidebar"> sidebar</router-link>  <br>
  <router-link to="example02">Example02</router-link> <br>
  <input type="text" v-model="database" name="" id="">
  {{database}}
</div>

</template>
<script>
import axios from "@/axios/MyAxios.js"
export default {
  data:() =>({
   database:""
  }),
  methods:{
    login() {
      
      axios
        .post("login", {    //两个参数 向哪里发送和发送的对象
          number: 1001,
          password: "123456",
          database:this.database
          
        })
        .then(resp => {
          alert(resp.headers["Authorization"]+"登陆成功");//把响应的头拿出来
          // this.user = resp.data.user;
        })
        .catch((err)=>{
         alert('登录失败')

        });
    }
}

}
</script>
