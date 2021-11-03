<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-28 21:45:12
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-03 16:14:40
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
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input
        type="text"
        v-show="todo.isEdit"
        :value="todo.title"
        @blur="handleBlur(todo,$event)"
        ref="getFocus"
      />
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  props: ["todo"],
  data() {
    return {
    };
  },
  methods: {
    handlerChacked(TodoId) {
      this.$bus.$emit("chackTodo", TodoId);
    },
    handleDelete(id) {
      if (confirm("确定删除吗")) {
        this.$bus.$emit("deleteTodo", id);
      }
    },
    handleEdit(todo) {
      if (todo.isEdit) {
        todo.isEdit = true;
      } else {
        this.$set(todo, "isEdit", true);
      }
      this.$nextTick(function(){
        this.$refs.getFocus.focus()
      })
    },
    handleBlur(todo,e) {
      todo.isEdit = false;
      if(!e.target.value.trim()){
        alert("输入不能为空")
        return
      }
      this.$bus.$emit("editTodo", todo.id, e.target.value);
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