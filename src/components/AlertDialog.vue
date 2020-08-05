<template>
  <div></div>
</template>
<script>
import { mapState } from "vuex";
export default {
  watch: {
    exp() {
      alert(`${this.exp.message}`);//自己声明的计算属性
    }
  },
  computed: {
    ...mapState({ exp: state => state.exception })
  }
};
</script>
