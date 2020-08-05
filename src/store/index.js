import Vue from "vue";
import Vuex from "vuex";
import * as types from "./types"
import axios from "@/axios/MyAxios"
import { updateRoutes } from "@/router/index";
import { author } from "@/util/Const";
Vue.use(Vuex);

const myState ={
  
  exception: { message: null },
  isLogin: false,
  name:null,
  user:{
    name:"yes",
    address:"no"
  },
  homework:{ name:null,deadline:null},
  teacher:null,
  courses:null,
  tabledata:[{
    date: '2020-05-02',
    subject: '计算机组成原理',
    people: '软件一班',
    score:60
  }, {
    date: '2020-05-04',
    subject: 'Java程序设计',
    people: '软件二班',
    score:70
  }, {
    date: '2020-05-01',
    subject: 'web系统框架',
    people: '软件三班',
     score:85
  }, {
    date: '2020-07-17',
    subject: '计算机网络',
    people: '软件四班',
    score:10086
  }]
};
//同步的方法
const myMutations ={
 [types.UPDATEUSER](state,data){
      state.user=data;
  },
  [types.LIST_HOMEWORKS](state, data) {
    state.homeworks = data;
  },
  [types.GET_HOMEWORK](state, data) {
    state.homework = data;
  },
  [types.GET_EXCEPTION](state, data) {
    state.exception = data;
  },
  [types.LOGIN](state, data) {
    state.isLogin = data;
  },
  name(state, data) {
    state.name = data;
  },
  teacher(state, data) {
    state.teacher = data;
  },
  courses(state, data) {
    state.courses = data;
  }
};
//异步的方法
const myActions={
  [types.UPDATEUSER]({commit},data) { //第一个参数是发放同步请求的方法 但是试图更新异步是仍然需要调用同步的方法返回
      setTimeout(()=>{
          commit(types.UPDATEUSER,data);
      },2000)
  },
  async [types.LIST_HOMEWORKS]({ commit }, data) {
    let resp = await axios.get("homeworks");
    commit(types.LIST_HOMEWORKS, resp.data.homeworks);
  },
  async [types.GET_HOMEWORK]({ commit }, data) {
    let resp = await axios.get(`homeworks/${data.hid}`);
    commit(types.GET_HOMEWORK, resp.data.homework);
  },
  //登录
   async [types.LOGIN]({ commit }, data) {
    let resp = await axios.post("login", data);
    let auth = resp.headers[author];
    if (resp != null) {
      sessionStorage.setItem(author, auth);
      sessionStorage.setItem("role", resp.data.role);
      updateRoutes();
      commit(types.LOGIN, true);
    }
  },
  async index({ commit }, data) {
    let resp = await axios.get("index");
    commit("name", resp.data.name);
  },
  // ------以下为向springboot发出请求
  // 需要取消mock，配置后端跨域
  // async backendindex({ commit }, data) {
  //   let resp = await axios.get("teacher/index");

  //   commit("teacher", resp.data.teacher);
  //   commit("courses", resp.data.courses);
  // },
  // async addCourse({ commit }, data) {
  //   let resp = await axios.post("teacher/courses", data);
  // }
}


export default new Vuex.Store({
  
  state: myState ,//全局可用的数据源
  mutations: myMutations,// 同步更新state数据的事件 当事件被激活自动注入state以及事件传入的参数
  actions: myActions,            //异步更新
  modules: {}             //多个模块共享数据时可以把多个模块中的单一数据源放到一起
});

// --------------------------
// 执行时判断，刷新时检测；也可以添加长度等更严格判断
if (sessionStorage.getItem(author) != null) {
  myState.isLogin = true;
}