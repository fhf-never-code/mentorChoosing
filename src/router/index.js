import Vue from "vue";
import VueRouter from "vue-router";

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
  }
];

const router = new VueRouter({
  routes
});

export default router;
