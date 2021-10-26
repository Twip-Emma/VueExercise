<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-13 19:38:00
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-10-26 22:44:38
 * @Description: file content
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <hr>
    <HelloWorld1></HelloWorld1>
    <hr>
    <HelloWorld2></HelloWorld2>
  </div>
</template>

<script>
import HelloWorld1 from "./components/Test1.vue"
import HelloWorld2 from "./components/Test2.vue"

export default {
  name: 'App',
  components: {
    HelloWorld1,
    HelloWorld2
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
  margin-top: 60px;
}
</style>
