<template>
  <div>
    <h1>Actions</h1>
    <p>异步更新，支持网络请求等操作</p>
    {{ user.name }} / {{ user.address }}
    <p>
      <input type="text" v-model="myUser.name" />
      <br />
      <input type="text" v-model="myUser.address" />
      <br />
      <button type="button" @click="change">change</button>
    </p>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { UPDATEUSER } from "@/store/types.js";
export default {
  data: () => ({
    myUser: {
      name: null,
      address: null
    }
  }),
  methods: {
    change() {
      this.$store.dispatch(UPDATEUSER, this.myUser);//dispatch分发方法
    }
  },
  computed: {
    ...mapState(["user"])
  }
};
</script>
