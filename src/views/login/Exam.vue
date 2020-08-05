<!--  -->
<template>
<div>
 <div id="box">
   
          <el-button type="primary" @click=" addChoosing">新增选择题</el-button>
          <el-button type="primary" @click=" saveChoosing">保存新增的选择题</el-button>
        <div class="buttonarea"  v-show="choosingUpdate">
          <el-input v-model="addinput.question" placeholder="请输入题干"></el-input>
          <el-input v-model="addinput.optionA" placeholder="请输入A选项"></el-input>
          <el-input v-model="addinput.optionB" placeholder="请输入B选项"></el-input>
          <el-input v-model="addinput.optionC" placeholder="请输入C选项"></el-input>
          <el-input v-model="addinput.optionD" placeholder="请输入D选项"></el-input> <hr>
          <el-input v-model="addinput.correctOption" placeholder="正确答案内容"></el-input>
        </div>
    
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
         <hr> 
          <el-radio :label="choose.correctOption" >{{choose.correctOption}}</el-radio> <br>
         <br>
          <el-button type="primary" @click="deleteChoosing(index)">删除选择题</el-button>

       </el-radio-group> 
       
       
    </div>

      <el-button type="primary" @click=" addJudge">新增填空题</el-button>
      <el-button type="primary" @click=" saveJudge">保存新增的填空题</el-button>    
      <div class="buttonarea"  v-show="judgeUpdate">
          <el-input v-model="addinput.question" placeholder="请输入题干"></el-input>
          <el-input v-model="addinput.optionA" placeholder="请输入A选项"></el-input>
          <el-input v-model="addinput.optionB" placeholder="请输入B选项"></el-input>
          <el-input v-model="addinput.correctOption" placeholder="正确答案内容"></el-input>
        </div>
    <div id="judge" v-for="(pd,index1) in judge" :key="index1">
        判断题：
                {{pd.question}}
           <el-radio-group   v-model="pd.x"  >
           <el-radio  :label="pd.optionA">{{pd.optionA}}</el-radio>
           <el-radio  :label="pd.optionB">{{pd.optionB}}</el-radio> <br>
           <el-button type="primary" @click="deleteJudge(index1)">删除填空题</el-button>
           </el-radio-group>
    </div> 

     <el-button type="primary" @click=" addAnswer">新增问答题</el-button>
      <el-button type="primary" @click=" saveAnswer">保存新增的问答题</el-button>   
       
      <div class="buttonarea"  v-show="answerUpdate">
       <el-input v-model="addinput.question" placeholder="请输入题干"></el-input>
       <el-input v-model="addinput.correctOption" placeholder="请输入参考答案内容"></el-input>
      </div>

    <div id="answer" v-for="(wd,index2) in write" :key="index2">
        问答题：
                {{wd.question}}
                <div style="margin: 20px 0;"></div>
                    <el-input
                      type="textarea"
                      placeholder="请输入参考答案"
                      v-model=" textarea"
                      maxlength="100"
                      show-word-limit
                    >
                    </el-input>
                    <el-button type="primary" @click="deleteAnswer(index2)">删除问答题</el-button>
    </div>
    
 </div>
 <div id="buttonarea">
     
          <el-button type="primary" @click="open">保存<i class="el-icon-upload el-icon--right"></i></el-button>
 </div>         
</div>
</template>
<script>
export default {
data() {
return { 
    choosingUpdate:false,
    judgeUpdate:false,
    answerUpdate:false,
   addinput:[{
        question:"",
        optionA:"",
        optionB:"",
        optionC:"",
        optionD:"",
        correctOption:"",
        answer:"",
        x:"",
   }],
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
        correctOption:"",
        x:""
    }]

}
}, 
methods:{
        addChoosing(){
          this.choosingUpdate=!this.choosingUpdate;
          this.addinput=[]
        } ,
        saveChoosing(){
           this.choosingUpdate=false;
           if(this.addinput.correctOption!=null&&
              this.addinput.question!=null&&
              this.addinput.optionA!=null&&
              this.addinput.optionB!=null&&
              this.addinput.optionC!=null&&
              this.addinput.optionD!=null
           ){
             this.$set(this.choosing,this.choosing.length,{
             question:this.addinput.question,
             optionA:this.addinput.optionA,
             optionB:this.addinput.optionB,
             optionC:this.addinput.optionC,
             optionD:this.addinput.optionD,
             correctOption:this.addinput.correctOption
           })
           }
              else{
                alert("新增题目不可含空项")
              }
           
          
           this.addinput=[]
        },

        deleteChoosing(index){
            this.choosingUpdate=false;
            this.$delete(this.choosing,index)
        },
        addJudge(){
          this.judgeUpdate=!this.judgeUpdate;
          this.addinput=[]
        },
        saveJudge(){
          this.judgeUpdate=false;
           if(this.addinput.correctOption!=null&&
              this.addinput.question!=null&&
              this.addinput.optionA!=null&&
              this.addinput.optionB!=null
           )
           {
             this.$set(this.judge,this.judge.length,{
             question:this.addinput.question,
             optionA:this.addinput.optionA,
             optionB:this.addinput.optionB,
             correctOption:this.addinput.correctOption
           })
           }
              else{
                alert("新增题目不可含空项")
              }
           this.addinput=[];
        },
        deleteJudge(index){
            this.judgeUpdate=false;
            this.$delete(this.judge,index)
        },
        addAnswer(){
          this.answerUpdate=!this.answerUpdate;
          this.addinput=[]
        } ,
        saveAnswer(){
            this.answerUpdate=false;
             if(this.addinput.correctOption!=null&&
                this.addinput.question!=null
           )
           {
             this.$set(this.write,this.write.length,{
             question:this.addinput.question,
             correctOption:this.addinput.correctOption
           })
           }
           else{
                alert("新增题目不可含空项")
              }
           this.addinput=[];
        },
        deleteAnswer(index){
            this.answerUpdate=false;
            this.$delete(this.write,index)
        },
        open() {
        this.$confirm(' 确认保存试卷吗', '请检查', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '成功保存！'
          });
          this.$router.push("/teacher");
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '返回出题界面'
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
     height: 100%;
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