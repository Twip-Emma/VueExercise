<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-13 19:38:00
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-08 10:43:17
 * @Description: file content
-->
<template>
  <div class="container">
    <!-- <Category :listData="games" title="游戏">
      <img
        src="https://api.pixiv.moe/image/i.pximg.net/img-master/img/2021/11/05/03/07/40/93924717_p0_master1200.jpg"
        alt=""
      />
    </Category>
    <Category :listData="games" title="电影">
      <ul>
        <li v-for="(item, index) in films" :key="index">{{ item }}</li>
      </ul>
    </Category>
    <Category :listData="games" title="美食">
      <img
        src="https://api.pixiv.moe/image/i.pximg.net/img-master/img/2021/11/05/00/30/00/93922241_p0_master1200.jpg"
        alt=""
      />
    </Category> -->
    <Book></Book>
  </div>
</template>

<script>
// import Category from "./components/Category";
import Book from "./components/Book"
// import Book from './components/Book.vue';
// import axios from 'axios'

export default {
  name: "App",
  components: { Book },
  data() {
    return {
      games: ["英雄联盟", "穿越火线", "DOTA"],
      films: ["《你好，李焕英》", "《悟空传》", "《唐人街探案3》"],
      foods: ["饼干", "蛋糕", "鸡腿"],
    };
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
</style>
