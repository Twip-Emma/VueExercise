<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-13 19:38:00
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-02 20:44:48
 * @Description: file content
-->
<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo"></MyHeader>
        <MyList :todos="todos"></MyList>
        <MyFooter :todos="todos" @checkAll="checkAll" @clearOkTodoReal="clearOkTodoReal"></MyFooter>
      </div>
    </div>
  </div>
</template>

<script>
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";
import MyHeader from "./components/MyHeader.vue";

export default {
  name: "App",
  components: {
    MyList,
    MyFooter,
    MyHeader,
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todoListData")) || []
    };
  },
  methods: {
    addTodo(todoObj){
      // console.log("我是APP组件，我收到了" ,todoObj)
      this.todos.unshift(todoObj)
    },
    chackTodo(id){
      this.todos.forEach((todo)=>{
        if(todo.id === id){
          todo.done = !todo.done
        }
      })
    },
    deleteTodo(id){
      this.todos = this.todos.filter((todo)=>{
        return todo.id !== id
      })
    },
    checkAll(done){
      this.todos.forEach((todo)=>{
        todo.done = done
      })
    },
    clearOkTodoReal(){
      this.todos = this.todos.filter((todo) => {
        return todo.done === false
      })
    },
    editTodo(todoId,newTitle){
      this.todos.forEach((todo)=>{
        if(todo.id === todoId){
          todo.title = newTitle
        }
      })
    }
  },
  watch:{
    todos:{
      deep:true,
      handler(value){
        localStorage.setItem("todoListData",JSON.stringify(value))
      }
    }
  },
  mounted(){
    this.$bus.$on("chackTodo",this.chackTodo)
    this.$bus.$on("editTodo",this.editTodo)
    this.$bus.$on("deleteTodo",this.deleteTodo)
  },
  beforeDestroy(){
    this.$bus.$off("chackTodo")
    this.$bus.$off("editTodo")
    this.$bus.$off("deleteTodo")
  }
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-edit{
  color: #fff;
  background-color: skyblue;
  border: 1px solid rgb(107, 164, 187);
  margin-right: 5px;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
