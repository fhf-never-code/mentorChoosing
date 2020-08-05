<!--  -->
<template>
<div id="box">
    <div  id="title">
    <h1 v-show="show">欢迎{{student.name}}使用在线考试系统的学生端</h1>  
     
    </div> 
        
    <div id="buttonarea">
        <el-button type="primary" 
        @click="scoretable=!scoretable"
        style=" height:50px"
        round
         >显示成绩</el-button> 

        <el-button type="success" 
        @click="table_show=!table_show"
        style=" height:50px"
         >显示考试信息</el-button> 
    
     <el-button 
         id="btn"
         type="danger"
         icon="el-icon-delete" 
         @click="show = !show" 
         circle></el-button>   
    </div>
      
    <div id="score">
       
            <el-table
      v-show="scoretable"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="时间"
        width="400">
      </el-table-column>
      <el-table-column
        prop="subject"
        label="科目"
        width="400">
      </el-table-column>
      <el-table-column
        prop="people"
        label="参考人员"
        width="400">
      </el-table-column>
      <el-table-column
        prop="score"
        label="分数"
        width="250">
      </el-table-column>

    </el-table>
    </div>
       
    <div id="table">
       
            <el-table
      v-show="table_show"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="时间"
        width="400">
      </el-table-column>
      <el-table-column
        prop="subject"
        label="科目"
        width="400">
      </el-table-column>
      <el-table-column
        prop="people"
        label="参考人员"
        width="400">
      </el-table-column>
      <el-table-column
        prop="test"
        label="参加考试"
        >
        <template  slot-scope="scope">
        <el-button @click="handleClick(scope.row.date)" type="text" >参加考试</el-button>
        
      </template>
      </el-table-column>

    </el-table>
    </div>
   
</div>

</template>

<script>
export default {
  
data() {
return {
        database:"",
        show:true,
        table_show:true,
        scoretable:true,
        student:{
            name:"李一锋",
            id:2017214241,
            age:22
        },
        tableData: [{
            date: '2020-05-02',
            subject: '计算机组成原理',
            people: '软件一班',
            score:"非参考科目无成绩"

          }, {
            date: '2020-05-04',
            subject: 'Java程序设计',
            people: '软件二班',
            score:70
          }, {
            date: '2020-05-01',
            subject: 'web系统框架',
            people: '软件三班',
             score: "非参考科目无成绩"
          }, {
            date: '2020-07-17',
            subject: '计算机网络',
            people: '软件二班',
            score:"还未参加考试"
          }],

}
},
methods:{
     handleClick(date){
      if(date=='2020-07-17'){
          
            this.$message({
             type:'success',
             message:"即将进入考场"
            
         }, 
         setTimeout(

             this.$router.push("/studentexam")
           
         ,3000)
         
         
         );
      }
      else{
         this.$message({
             type:'error',
             message:"未到考试时间，不可进入考场"
         });

      }
    }
},
//生命周期 - 创建完成（访问当前this实例）
created() {
    // alert("欢迎"+this.student.name+"同学访问")
},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {
    
}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
*{
    margin: 0;
    padding: 0;
}
#btn:hover{
     color: red;
     transform: rotate(360deg);
     transition: 1s;
     background-color: rgba(13, 228, 199, 0.986);
}
#title h1{
    position: relative;
    float: left;
    color: sandybrown;
    margin-left: 200px;
    background-color: #7b17d8;
     box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

 #box{
     width: 100%;
     height: 720px;
     box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
     margin: auto;
     margin-top: auto;
     text-align: center;
     padding: 30px;
     background-color:rgb(123, 84, 216);
}
#buttonarea{
    float: right;
    padding: 10px;
}
#box div{
    padding: 10px;
}
</style>