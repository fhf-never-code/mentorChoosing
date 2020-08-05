<!--  -->
<template>
<div id="box">

<div  id="title">
    <h1 v-show="show">欢迎{{teacher.name}}老师使用在线考试系统的教师端</h1>  
     
 </div>

  <div id="buttonarea">

        <el-button type="primary" 
        @click="scoreshow=!scoreshow"
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
    <div id="updatearea" v-show="table_show&&updateshow">
      <el-input v-model="addinput.date" 
                placeholder="请输入更新考试的日期" 
                clearable=""></el-input>
      <el-input  
                v-model="addinput.people" 
                placeholder="请输入更新的考试人员" 
                clearable=""></el-input>
      <el-input v-model="addinput.subject" 
                placeholder="请输入更新的考试科目"
                clearable=""></el-input>
  
    </div>

<div id="testTable" v-show="table_show"><el-table
    :data="tableData"
    style="width: 100%">

    <el-table-column
      label="日期"
      width="300">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
        
      </template>
      
    </el-table-column>

    <el-table-column
      label="参加考试人员"
      width="300">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>参加考试人员: {{ scope.row.people }}</p>
          <p>科目: {{ scope.row.subject}}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="normal">{{ scope.row.people }}</el-tag>
          </div>
        </el-popover>
       
      </template>
    </el-table-column>
    
    <el-table-column
      label="科目"
      width="300">
      <template slot-scope="scope">
        
        <span style="margin-left: 10px">{{ scope.row.subject }}</span>
       
      </template>
     
    </el-table-column>

    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
         
          @click="handleEdit(scope.$index)">编辑</el-button>
        <el-button
          
          type="danger"
          @click="handleDelete(scope.$index)">删除</el-button>
          <el-button
         
          @click="handleSave(scope.$index)">保存当前行操作</el-button>
           <el-button
         
          @click="handleAdd(scope.$index)">新增考试</el-button>
           <el-button
         
          @click="handleCreateExam(scope.$index)">增加/修改试卷</el-button>
      </template>
     </el-table-column>
       </el-table>
    
  </div>

    <el-table
    
    :data="tableData"
    style="width: 100%"
    row-key="id"
    border
    v-show="scoreshow"
    lazy
    :load="load"
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
    <el-table-column
      prop="date"
      label="时间"
     >
    </el-table-column>
    <el-table-column
      prop="subject"
      label="考试科目"
      >
    </el-table-column>
     <el-table-column
      prop="id"
      label="课程号/学号"
     >
    </el-table-column>
    <el-table-column
      prop="people"
      label="参考人员"
      
      >
    </el-table-column>
    <el-table-column
      prop="realScore"
      label="成绩">
     
    </el-table-column>
     <input type="text">
  </el-table>
</div>

</template>

<script>
import axios from "axios"
export default {
  
data() {
return {
   
  table_show:false,
  show:true,
  buttonshow:true,
  updateshow:false,
  scoreshow:true,
  // editdes: false,
  // scoreupdate:true,
  // scoreupdatedata:"",
  teacher:{
        name:"Tony",
        id:2010
  },
  tableData:   [{
            id:1,
            date: '2020-07-14',
            subject: '计算机组成原理',
            people: '软件一班',
            hasChildren:true
          
          }, {
            id:2,
            date: '2020-07-15',
            subject: 'Java程序设计',
            people: '软件二班',
            hasChildren:true
          
          }, {
            id:3,
            date: '2020-07-16',
            subject: 'web系统框架',
            people: '软件三班',
            hasChildren: true
          }, {
            id:4,
            date: '2020-07-17',
            subject: '计算机网络',
            people: '软件四班',

          }],
          addinput:[{
            data:"",
            subject:"",
            people:"",
            score:null ,
          }],
          
}
},
methods:{
    handleDelete(index){
    this.updateshow=false;
    this.$delete(this.tableData,index);
    },
    handleEdit(index){
        this.updateshow=true;
        this.addinput=[];
        this.addinput={
            date:this.tableData[index].date,
            subject:this.tableData[index].subject,
            people:this.tableData[index].people,
       }
    },
    handleSave(index){
       if(this.addinput.date!=null&&
          this.addinput.people!=null&&
          this.addinput.subject!=null
       ){
        this.$set(this.tableData,index,this.addinput);
       this.updateshow=false;
       this.addinput=[];
       }
       else{alert("修改信息不能为空")};

       
    },
    handleAdd(index){
       this.updateshow=true;
       this.addinput=[];
       this.$set(this.tableData,this.tableData.length,{
         
            date:this.addinput.date,
            subject:this.addinput.subject,
            people:this.addinput.people,
       })
    },
    handleCreateExam(index){
         this.$router.push("/exam")
        // console.log(index)
    },
    load(tree, treeNode, resolve) {
        setTimeout(() => {
          resolve([
            
            {
              id: 2017214241,
              date: '2020-07-16',
              people: '风红枫',
              realScore: 85
            }, {
              id: 2017214255,
              date: '2020-07-16',
              people: '郭子钰',
              realScore: 90
            }
          ])
        }, 1000)
    },
   


},

//生命周期 - 创建完成（访问当前this实例）
created() {

      //  axios.post('http://307i7k5400.wicp.vip/api/login',this.tableData)
          
      //   .then(function(res){
      //     console.log(res);
      //       })
      //   .catch(function(err){
      //     console.log(err);
      //       });
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
#testTable{
  padding-left: 10px;
}
#title h1{
    position: relative;
    float: left;
    color: rgb(219, 60, 211);
    margin-left: 100px;
    background-color: #e1e446;
    border-radius: 5px;
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
     background-color:rgb(108, 192, 212);
}
#buttonarea{
    float: right;
    padding: 10px;
}
#box div{
    padding: 10px;
}
#updatearea  {
    width: 300px;
}
#updatearea el-input{
      display: inline;
}

</style>