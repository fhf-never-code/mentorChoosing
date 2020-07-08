<template>
    <div>
       {{ msg }}  
       <br>
        {{user.name}}/{{replace}}
           <!--   显示逻辑过于复杂的话 用计算属性来实现
           计算属性默认声明的事属性的getter方法，不支持传参，但是 js的属性可以是一个函数-->
        <button @click="changed">按下去吧</button>
    </div>
</template>
    <script>
    export default {
      data:()=>({
          msg:"sad",
          user:{
              name:"fhfh",insertTime:Date()
          }
      }),
      methods:{
          changed(){
              this.user.name = "JoJO"         //this指向当前vue对象下
          }
      },
      computed :{  //声明计算属性 必须有返回值替换到对应位置
          replace(){
                return this.user.insertTime.replace("T"," ")  ;
          }  ,
          myReplace() {          //可以直接返回一个函数来带参数

          }  

      }
    }
    </script>