<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-13 19:38:00
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-17 10:57:59
 * @Description: file content
-->
<template>
  <div>
    <div>
      <button>点我</button>
      <input type="text" />
    </div>
    <div>
      <el-row>
        <el-button icon="el-icon-search" circle></el-button>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="success" icon="el-icon-check" circle></el-button>
        <el-button type="info" icon="el-icon-message" circle></el-button>
        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>

<style>
</style>
