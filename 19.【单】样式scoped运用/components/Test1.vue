<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-26 22:43:36
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-10-26 22:50:39
 * @Description: file content
-->
<template>
  <div>
    <h2 class="demo">学校名称：{{name}}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name:"湖南工程学院"
    }
  },
}
</script>

<style scope>
 .demo{
   background: skyblue;
 }
</style>