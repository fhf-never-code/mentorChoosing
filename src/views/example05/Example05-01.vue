<template>
  <div>
    <h1>Form Binding</h1>
    <form>
      <input type="text" v-model="user.name" />
      <br />
      <label>
        <input type="radio" v-model="user.sex" value="male" />
        <!-- vue不需要像原生那样用name属性分组
         因为双向绑定的对象时同一个user.sex所以自然就知道是一组了 -->
        男
      </label>
      <br />
      <label>
        <input type="radio" v-model="user.sex" value="female" />
        女
      </label>
      <br />
      <select v-model="user.title">
        <option v-for="(t, index) in titles" :key="index" :value="{ id: t.id }">
          <!-- 看后端怎么设计决定:value中值是对象还是单一的值 仍然使用v-bind进行动态绑定 -->
          {{ t.name }}
        </option>
      </select>
      <br />

      <!-- Label/checkbox/br是一个整体 用template包裹 -->
      <template v-for="(c, index) in courses">
        <!-- 复选框 -->
        <label :key="`lab---${index}`">
        <!-- 不同的索引不应该重名 所以使用字符串模板来加前缀区分 -->
          <input
            type="checkbox"
            v-model="user.courses"
            :value="{ id: c.id }"
            :key="`ch-${index}`"
          />
          {{ c.name }}
        </label>
        <br :key="`br-${index}`" />
      </template>
      <button @click="submit" type="button">提交</button>
      <!-- 一定是用type为Button 否则就由浏览器发出Http请求了 -->
    </form>
    <p>{{ user }}</p>
    <hr />
    <br />
    <input type="file"  @change="fileChange" />
    <!-- 文件上传不支持双向绑定 只能用事件去监听 -->
    <br />
    <p v-if="file != null">{{ file.name }}/{{ file.size }}</p>
    <br />
  </div>
</template>
<script>
export default {
  data: () => ({
    user: {
      name: "双向绑定中的数据",
      sex: null,
      courses: [],
      title: null
    },
    file: {},
    titles: [
      { id: 1, name: "讲师" },
      { id: 2, name: "副教授" },
      { id: 3, name: "教授" }
    ],
    courses: [
      { id: 4, name: "Java" },
      { id: 5, name: "Web开发技术" },
      { id: 6, name: "系统程序设计" }
    ]
  }),
  methods: {
    submit() {
      console.log(this.user);
    },
    fileChange(event) {
      console.log(event.target.files[0]);
      // 上传文件是二进制，不能使用json类型请求
      this.file = event.target.files[0];
      // event当前这个事件对象 可以作为方法参数
     
    }
  }
};
</script>
