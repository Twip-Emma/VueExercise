<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-16 17:45:34
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-16 18:20:52
 * @Description: file content
-->
<template>
  <ul>
    <!-- <li>消息编号：{{$route.query.id}}</li>
      <li>消息内容：{{$route.query.id}}</li> -->
    <li>消息编号：{{ $route.params.id }}</li>
    <li>消息内容：{{ $route.params.id }}</li>
  </ul>
</template>

<script>
export default {
    name:"Detial"
}
</script>

<style>

</style>