<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-16 15:58:42
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-16 16:46:27
 * @Description: file content
-->
<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/news"
            >News</router-link
          >
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/message"
            >Message</router-link
          >
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
</style>