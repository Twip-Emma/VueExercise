<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-18 20:55:52
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-10-18 22:23:44
 * @Description: file content
-->
<template>
  <div>
    <School /><br>
    <School /><br>
    <School /><br>
    <Student></Student>
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue"
export default {
  name: "App",
  components: {
    School,Student
  },
};
</script>

<style>
</style>