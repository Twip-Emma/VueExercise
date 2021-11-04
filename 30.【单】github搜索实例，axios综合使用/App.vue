<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-13 19:38:00
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-04 19:36:25
 * @Description: file content
-->
<template>
  <div id="app">
    <div class="container">
      <Search />
      <List />
    </div>
  </div>
</template>

<script>
import List from "./components/List"
import Search from "./components/Search"
// import axios from 'axios'

export default {
  name:"App",
  components:{List,Search},
  data() {
    return {
      
    }
  }
};
</script>

<style>


</style>
