<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-26 22:43:36
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-10-26 22:51:14
 * @Description: file content
-->
<template>
  <div>
    <h2 class="demo">学生姓名：{{name}}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name:"张三"
    }
  },
}
</script>

<style scoped>
 .demo{
   background: orange;
 }
</style>