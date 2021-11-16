<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-07 14:08:14
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-07 14:30:54
 * @Description: file content
-->
<template>
  <div class="categroy">
      <h3>{{title}}分类</h3>

      <slot></slot>
  </div>
</template>

<script>
export default {
    name:"Category",
    props:["listData","title"]
}
</script>

<style scoped>
.categroy{
    background-color: skyblue;
    height: 300px;
    width: 200px;
}

h3{
    text-align: center;
    background-color: orange;
}

img{
    width: 100%;
}
</style>