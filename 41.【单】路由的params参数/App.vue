<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-13 19:38:00
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-16 16:27:02
 * @Description: file content
-->
<template>
  <div>
    <div class="row">
      <Banner/>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 原始a标签 -->
          <!-- <a class="list-group-item active" href="./about.html">About</a>
          <a class="list-group-item" href="./home.html">Home</a> -->

          <!-- 路由写法 -->
          <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./components/Banner.vue"
export default {
  name: "App",
  components: {Banner},
  data() {
    return {};
  },
};
</script>

<style>
</style>
