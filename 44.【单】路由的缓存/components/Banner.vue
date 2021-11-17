<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-16 16:26:21
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-16 20:50:50
 * @Description: file content
-->
<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router Demo</h2>
      <button @click="back">后退</button>
      <button @click="forward">前进</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    back() {
        this.$router.back()
    },
    forward() {
        this.$router.forward()
    },
  },
};
</script>

<style>
</style>