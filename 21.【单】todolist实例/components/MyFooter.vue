<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-28 21:45:12
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-10-30 21:13:16
 * @Description: file content
-->
<template>
  <div class="todo-footer" v-show="allTodoTotal">
    <label>
      <input type="checkbox" :checked="isAll" @click="chackAllBtn"/>
    </label>
    <span>
      <span>已完成{{ doneTodoTotal }}</span> / 全部{{ allTodoTotal }}
    </span>
    <button class="btn btn-danger" @click="clearOkTodo">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos","checkAll","clearOkTodoReal"],
  data() {
    return {};
  },
  computed: {
    doneTodoTotal() {
      let i = 0;
      this.todos.forEach((todo) => {
        if (todo.done) {
          i++;
        }
      });
      return i;
    },
    allTodoTotal() {
      return this.todos.length;
    },
    isAll() {
      if (
        this.doneTodoTotal === this.allTodoTotal &&
        this.allTodoTotal > 0
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    chackAllBtn(e){
      this.checkAll(e.target.checked)
    },
    clearOkTodo(){
      this.clearOkTodoReal()
    }
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>