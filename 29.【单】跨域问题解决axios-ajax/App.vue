<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-13 19:38:00
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-04 19:11:40
 * @Description: file content
-->
<template>
  <div>
    <button @click="getStudentInfo">获取学生信息</button>
  </div>
</template>

<script>
// import Test from "./components/Test"
// import Test2 from "./components/Test2"
import axios from 'axios'

export default {
  name:"App",
  data() {
    return {
      
    }
  },
  methods:{
    getStudentInfo(){
        axios.get("/students").then(
          response => {
            console.log("请求成功了",response.data)
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
