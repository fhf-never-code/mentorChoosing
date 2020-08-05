<template>
  <div>
    <h1>State绑定</h1>
    <p>
      通过根组件store对象绑定
      <br />
      {{ getUser.name }} / {{ getUser.address }}
    </p>
    <hr />
    <p>
      通过mapState绑定
      <br />
      {{ user.name }}
    </p>
    <p>
      通过自定义组件内计算属性，引用state属性
      {{ user1.address }}
    </p>
  </div>
</template>
<script>
import { mapState } from "vuex";//辅助的函数的引入
export default {
  computed: {  //声明的都是属性
    getUser() {
      return this.$store.state.user; //调用根组件
    },
    ...mapState(["user"]), //不能直接放方法 放返回的结果 用对象扩展符直接拿到
    ...mapState({ user1: state => state.user })//换一个名
  }
};
</script>
