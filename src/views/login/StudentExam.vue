<!--  -->
<template>
<div>
 <div id="box">
    <div id="choose" v-for="(choose,index) in choosing" :key="index"   >
        单选题：
            <div>
                {{choose.question}}
            </div>
         <el-radio-group  v-model="choose.x"  >
         <el-radio :label="choose.optionA" >{{choose.optionA}}</el-radio> <br>
         <el-radio :label="choose.optionB" >{{choose.optionB}}</el-radio> <br>
         <el-radio :label="choose.optionC" >{{choose.optionC}}</el-radio> <br>
         <el-radio :label="choose.optionD" >{{choose.optionD}}</el-radio> <br>
         <br>
       </el-radio-group> 
    </div>    
    
    <div id="judge" v-for="(pd,index1) in judge" :key="index1">
        判断题：
                {{pd.question}}
           <el-radio-group   v-model="pd.x"  >
           <el-radio  :label="pd.optionA">正确</el-radio>
           <el-radio  :label="pd.optionB">错误</el-radio>
           </el-radio-group>
    </div> 

    <div id="answer" v-for="(wd,index2) in write" :key="index2">
        问答题：
                {{wd.question}}
                <div style="margin: 20px 0;"></div>
                    <el-input
                      type="textarea"
                      placeholder="请输入内容"
                      v-model=" textarea"
                      maxlength="100"
                      show-word-limit
                    >
                    </el-input>
    </div>
    
 </div>
 <div id="buttonarea">
     
          <el-button type="primary" @click="open">交卷<i class="el-icon-upload el-icon--right"></i></el-button>
 </div>         
</div>
</template>
<script>
export default {
data() {
return { 
    textarea:'',
    radio: 3,
    choosing:[{
    id:1,
    question:"单选题一",
    optionA:"A:这是问题一的A选项",
    optionB:"B:路由传参",
    optionC:"C:父子组件传参",
    optionD:"D:选项D",
    correctOption:"父子组件传参",
    x:""
  },
  {
    question:"问题二",
    optionA:"这是问题二的A选项",
    optionB:"路由传参",
    optionC:"父子组件传参",
    optionD:"问题2的选项D",
    correctOption:"问题2的选项D",
    x:"",
 }],
    judge:[{
        question:"一周有七天对吗？",
        correctOption:"yes",
        optionA:"正确",
        optionB:"错误",
        x:""
    },
    { question:"一周有十天对吗？",
        correctOption:"yes",
        optionA:"正确",
        optionB:"错误",
        x:""}],

        write:[{
        question:"你觉得这次 有价值吗 请作答",
        answer:"",
        x:""
    }]

}
}, 
methods:{
   
        open() {
        this.$confirm(' 确认交卷吗', '三思而后行', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '成功交卷！'
          });
          this.$router.push("/student");
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '返回考场'
          });          
        });
      }
    
 },

//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {
    
},
}
</script>
<style scoped>
/* @import url(); 引入css类 */
*{
    margin: 0;
    padding:0 ;
}
#box>div{
    margin: 10px;
    padding: 5px;
    border:1px solid rgb(78, 78, 235);
}
#box{
     width: 100%;
     height: 720px;
     box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
     padding: 30px;
     background-color:rgb(238, 223, 139);
}
#buttonarea{
    border:0px;
    width: 100px;
    height: 100px;
    position: fixed;
    bottom: 0px;
    left: 50%;
}
</style>