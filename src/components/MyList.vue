<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-28 21:45:12
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-10-28 22:47:51
 * @Description: file content
-->
<template>
  <ul class="todo-main">
    <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj"/>
  </ul>
</template>

<script>
import MyItem from "./MyItem";

export default {
  name: "MyList",
  components: { MyItem },
  props:["todos"]
};
</script>

<style>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>