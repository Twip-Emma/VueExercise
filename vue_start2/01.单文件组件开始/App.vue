<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-13 19:38:00
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-10-15 09:24:28
 * @Description: file content
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <hello-world-2></hello-world-2>
    <hr>
    <HelloWorld3></HelloWorld3>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HelloWorld2 from "./components/Test1.vue"
import HelloWorld3 from "./components/Test2.vue"

export default {
  name: 'App',
  components: {
    HelloWorld,
    HelloWorld2,
    HelloWorld3
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
