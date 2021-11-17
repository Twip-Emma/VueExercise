<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-16 15:58:42
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-16 21:05:04
 * @Description: file content
-->
<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/news"
            >News</router-link
          >
        </li>
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/message"
            >Message</router-link
          >
        </li>
      </ul>
      <!-- 指定多个个《组件名》被替换掉的时候不会被销毁，使用数组 -->
      <!-- <keep-alive :include="["xxx1","xxx2"]"> -->
        
      <!-- 指定一个《组件名》被替换掉的时候不会被销毁 -->
      <keep-alive include="News">
        <router-view></router-view>
      </keep-alive>
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