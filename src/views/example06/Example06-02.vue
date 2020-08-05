<template>
  <div>
    <h1>Mutation</h1>
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
      this.$store.commit(UPDATEUSER, this.myUser //完成同步的请求 $store.commit激活同步事件
        // name: this.myUser.name,
        // address: this.myUser.address
      );
    }
  },
  computed: {
    ...mapState(["user"])
  }
};
</script>
