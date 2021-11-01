<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-18 20:55:52
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-01 20:25:04
 * @Description: file content
-->
<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <School />
    <Student />
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
  data() {
    return {
      msg:"你好啊"
    }
  }
};
</script>

<style>
.app {
  background: orange;
  padding: 5px;
}
</style>