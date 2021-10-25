<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-18 20:55:52
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-10-18 22:33:15
 * @Description: file content
-->
<template>
  <div>
    <!-- <School /><br>
    <School /><br>
    <School /><br> -->
    <Student :age="20" name="张三" sex="男"></Student>
  </div>
</template>

<script>
import Student from "./components/Student.vue"
export default {
  name: "App",
  components: {
    Student
  },
};
</script>

<style>
</style>