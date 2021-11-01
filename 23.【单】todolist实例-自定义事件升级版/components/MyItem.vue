<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-28 21:45:12
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-10-31 19:48:55
 * @Description: file content
-->
<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handlerChacked(todo.id)"
      />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  props: ["todo", "chackTodo","deleteTodo"],
  data() {
    return {};
  },
  methods: {
    handlerChacked(TodoId) {
      this.chackTodo(TodoId);
    },
    handleDelete(id) {
      if (confirm("确定删除吗")) {
        this.deleteTodo(id)
      }
    },
  },
  // mounted(){
  //     console.log(this.todo)
  // }
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background: #ddd;
}

li:hover button {
  display: block;
}
</style>