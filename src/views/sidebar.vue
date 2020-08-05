<template>
    <div>
        <h1>这是一个实例</h1>
         <ul>
             <li><router-link to="/example01">Example01</router-link></li>
             <li><router-link to="/example02">Example02</router-link></li> <br>
             <li><router-link to="/example03/students/12/homeworks/1">路由传参1</router-link></li>
             <li><router-link to="/example03/students/22/homeworks/3">路由传参2</router-link></li>
            <br>
             <li><router-link to="/example04-01">example04-01</router-link></li> 
             <li><router-link to="/example04-02">example04-02</router-link></li> 
             <li><router-link to="/example04-03">example04-03</router-link></li> 
             <br>
             <li><router-link to="/example05-01">example05-01</router-link></li> 
             <li><router-link to="/example05-02">example05-02</router-link></li> 
             <!-- <button v-if=""><router-link to="/example05-02">example05-02</router-link> </button> -->
         <br>
             <li><router-link to="/example06-01">基本绑定</router-link></li> 
             <li><router-link to="/example06-02">同步更新</router-link></li> 
             <li><router-link to="/example06-03">异步更新</router-link></li> 
             <br>
             <p>axios&mock</p>
             <li><router-link to="/example07-01">基本绑定</router-link></li> 
             <li><router-link to="/example07-02">同步更新</router-link></li> 
             <li><router-link to="/example07-03">异步更新</router-link></li> 
             <br> 
             <p>父子组件间传参</p>
             <li><router-link to="/example08-01">父组件向子组件传参</router-link></li> 
             <br> 
             <p>axios拦截器</p>
             <li><router-link to="/example09-01">axios拦截器</router-link></li> 
             <br> 
             <li><router-link to="/example10">组件嵌套</router-link></li> 
              <br> 
             <li><router-link to="/example11">整合Sessionstorage</router-link></li>  
              <br> 
             <li><router-link to="/example12">前后端连调&跨域</router-link></li>    
         </ul>
    </div>
</template>
<style scoped>

h1{
    color: red;
}
</style>