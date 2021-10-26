<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-18 22:25:37
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-10-26 21:56:29
 * @Description: file content
-->
<template>
  <div id="app">
      <School></School>
      <Student></Student>
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'
export default {
  name:"App",
  components:{
    School,Student
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
