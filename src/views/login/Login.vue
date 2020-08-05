<!--  -->
<template>
<div id="container">
  <div id="id">
      <h1 style="color:blue">请选择您的身份</h1> <br>
      <label v-for="(item, index) in radioData" :key="index">
      <input
        type="radio"
        v-model="radioVal"
        :value="item.value"
        @change="getRadioVal"
      />
      {{item.value}}
      </label>
     <br>
  </div>
         <i class="el-icon-user-solid"></i>
           <el-input  placeholder="请输入您的用户名" 
              style="width: 300px" 
              v-model="input" 
              clearable> </el-input> <br>
          <i class="el-icon-lock"></i>
            <el-input placeholder="请输入密码" 
              v-model="password" 
              style="width: 300px" 
              show-password 
              clearable></el-input>   <br>
             <!-- {{$route.params.identity}} -->
             <div >
                <el-button type="success" 
                style="color:red"
                icon="el-icon-check" 
                @click="submit"></el-button>
                <el-button type="info" @click="alert" plain>忘记密码?</el-button>
             </div>
             
</div>
</template>

<script>
  export default {
    props:["id"],
  data() {
    return {
      radioData: [
        { value: 'Teacher' },
        { value: 'Student' }
       
      ],
      radioVal: 'Teacher', // 用于设置默认选中项,
      input:"",
      password:""
    };
  },
  created(){
    
  },
  methods: {
    getRadioVal() {
      console.log(this.radioVal);
      
    },
    submit(){
      if(this.input!=null&&this.password!=null)
      {
        if(this.radioVal=='Teacher')
      this.$router.push("/teacher");
      else if(this.radioVal=='Student')
      this.$router.push("/student")
      console.log(this.input)
      }
      else if(this.input==null&&this.password==null)
       alert("用户名或者密码不能为空")
      
    },
    alert(){
      this.$message({
        message:"请及时联系管理员"
      })
    }
  }
};
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
}
#container div{
  margin: 10px;
 
}

#container{
  width: 100%;
  height: 720px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  margin: auto;
  margin-top: auto;
  text-align: center;
  padding: 30px;
  padding-right: 25px;
  overflow:hidden;
  background-color:#e4dc69;
}
el-input{
  padding: 10px;
}
 
</style>