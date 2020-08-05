<template>
  <div>
    <h1>v-for</h1>
    <ul>
      <li v-for="h in homeworks" :key="h.id">
        <!-- h是自己命名的 但是本质还是homeworks -->
        <router-link :to="`/homeworks/${h.id}`">
        <!-- 字符串的模板 -->
          {{ h.name }} / {{ formatDate(h.deadline) }}
        </router-link>
      </li>
    </ul>

    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>deadline</th>
          <th>do</th>
        </tr>
      </thead>
      <tr v-for="(h, index) in homeworks" :key="index">
        <!-- 循环的内容，索引 -->
        <td>{{ index }}</td>
        <td>{{ h.name }}</td>
        <td>{{ formatDate(h.deadline) }}</td>
        <td>
          <button @click="removeItem(index)">remove item</button>
        </td>
      </tr>
    </table>

    <p>
      动态追加数组中的数据
      <br />
      this.$set(vm.items, indexOfItem, newValue)
      <!-- $是挂在到根节点的 随时使用$set调用 数组 索引 新值 -->
    </p>
    <button @click="addItem">add item</button>
  </div>
</template>
<script>
export default {
  data: () => ({
    homeworks: [
      { id: 1, name: "Java基本数据类型", deadline: "2019-04-10T09:00" },
      { id: 2, name: "Java封装", deadline: "2019-05-10T12:00" },
      { id: 3, name: "Java泛型", deadline: "2019-06-10T21:30" }
    ]
  }),
  computed: {
    formatDate() {
      return date => date.replace("T", " ").substring(0, 16);
    }
  },
  methods: {
    addItem() {
      this.$set(this.homeworks, this.homeworks.length, {
        // 数组 位置{索引+1(最后的位置)} 添加的东西（这里是一个对象）
        id: this.homeworks.length + 1,
        name: "不喜欢Java",
        deadline: new Date().toISOString()
      });
    },
    removeItem(index) {
      this.$delete(this.homeworks,index);
      // 与set添加 相对应的删除的方法 参数为 删除的对象 索引
    }
  }
};
</script>
<style scoped>
ul {
  list-style: none;
}
</style>
