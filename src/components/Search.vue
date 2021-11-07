<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-04 19:18:40
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-04 21:00:50
 * @Description: file content
-->
<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWord"
      />&nbsp;<button @click="searchUser">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  name: "Search",
  data() {
      return {
          keyWord:""
      }
  },
  methods:{
      searchUser(){
          axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
              response => {
                  console.log("请求成功了!",response.data.items)
                  this.$bus.$emit("sendUserInfo",response.data.items)
              },
              error => {
                  console.log("请求失败了",error.message)
              }
          )
      }
  }
};
</script>

<style>
</style>