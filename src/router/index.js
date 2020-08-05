import Vue from "vue";
import VueRouter from "vue-router";
// import { isObject } from "core-js/fn/object";

// const routerPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch(error=> error)
// }

Vue.use(VueRouter);

const routes = [
  {
    path:"/example01",
    component:() => import ("@/views/example01/Example01.vue") //可用
    // component:() => import ("/src/views/example01/Example01.vue")//不可用
  },
  {
    path:"/example02",
    component:()=>import("@/views/example02/Example02.vue")
  },
  {
    path:"/example03",
    component:()=>import("@/views/example03/Example03.vue")
  },
  {
    //props: true,
    path: "/student",
    component: () => import("@/views/login/Student.vue")
  },
  {
    //props: true,
    path: "/teacher",
    component: () => import("@/views/login/Teacher.vue")
  },
  {
    path: "/exam",
    component: () => import("@/views/login/Exam.vue")
  },
  {
    path: "/studentexam",
    component: () => import("@/views/login/StudentExam.vue")
  },
  {
    path: "/example04-01",
    component: () => import("@/views/example04/Example04-01.vue")
  },
  {
    path: "/example04-02",
    component: () => import("@/views/example04/Example04-02.vue")
  },
  {
    path: "/example04-03",
    component: () => import("@/views/example04/Example04-03.vue")
  },
  {
    path: "/example05-01",
    component: () => import("@/views/example05/Example05-01.vue")
  },
  {
    path: "/example05-02",
    component: () => import("@/views/example05/Example05-02.vue")
  },
  {
    path:"/",
    component:()=> import("@/views/login/Login.vue")
  },
  // { 
  //   props:true,
  //   path:"/views/page/:indentity",
  //   component:()=> import("@/views/login/Login.vue") //这个组件中可以接受参数作为该组件中props的属性传值
  // },
  {
    path: "/example06-01",
    component: () => import("@/views/example06/Example06-01.vue")
  },
  {
    path: "/example06-02",
    component: () => import("@/views/example06/Example06-02.vue")
  },
  {
    path: "/example06-03",
    component: () => import("@/views/example06/Example06-03.vue")
  },
  
  {
    path: "/example07-01",
    component: () => import("@/views/example07/Example07-01.vue")
  },
  {
    path: "/example07-02",
    component: () => import("@/views/example07/Example07-02.vue")
  },
  {
    path: "/example07-03",
    component: () => import("@/views/example07/Example07-03.vue")
  },
  {
    path: "/example08-01",
    component: () => import("@/views/example08/Example08-01.vue")
  },
  {
    path: "/example09-01",
    component: () => import("@/views/example09/Example09-01.vue")
  },
  {
    props: true,
    path: "/example10",
    component: () => import("@/views/example10/Example10-01.vue"),
    children: [
      {
        props: true,
        path: "homeworks/:hid",
        component: () => import("@/views/example10/Homework.vue")
      }
    ]
  },
  {
    props: true,
    path: "/example11",
    component: () => import("@/views/example11/Example11-01.vue")
  },
  {
    props: true,
    path: "/example12",
    component: () => import("@/views/example12/Example12-01.vue")
  },
  {
    props: true,
    path: "/example13",
    component: () => import("@/views/example13/Example13-01.vue")
  },
  {
    props: true,
    path: "/example14",
    component: () => import("@/views/example14/exp14.vue")
  },

  
];

const router = new VueRouter({
  routes
});

// // 以上为没有角色要求的默认路由
// // --------------------------
// // 后期追加的路由配置
// let adminRoutes = [
//   {
//     props: true,
//     path: "/example11/welcome",
//     component: () => import("@/views/example11/Welcome.vue")
//   },
//   {
//     props: true,
//     path: "/example12/courses",
//     component: () => import("@/views/example12/Course.vue")
//   }
// ];
// 必须与后端提前约定。按角色，动态加载路由信息
// 使其他角色即使知道路由路径，也无法加载对应的组件
const teacherRole = "6983f953b49c88210cb9";
const studentRole = "bb63e5f7e0f2ffae845c";
export default router;
// 暴露该方法。登录后，有vuex调用，通知更新路由信息
// export function updateRoutes() {
//   switch (sessionStorage.getItem("role")) {
//     case teacherRole:
//       router.addRoutes(adminRoutes);
//       break;
//     case studentRole:
//       // student的路由
//       break;
//   }
// }
// 再此文件模块加载时，也执行。用户登陆后刷新页面时，按sessionstorage中数据初始化
// 没有找到sessionstorage的监听事件
// updateRoutes();
