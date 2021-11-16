<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-13 19:38:00
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-14 13:09:07
 * @Description: file content
-->
<template>
  <div class="container">
    <Count></Count>
    <hr>
    <Person></Person>
  </div>
</template>

<script>
// import Category from "./components/Category";
import Count from "./components/Count"
import Person from "./components/Person"
// import Book from './components/Book.vue';
// import axios from 'axios'

export default {
  name: "App",
  components: { Count,Person },
  data() {
    return{}
  },
};
</script>

<style>
</style>
