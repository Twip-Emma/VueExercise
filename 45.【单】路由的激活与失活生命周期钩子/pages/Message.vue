<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-16 16:42:53
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-16 20:46:35
 * @Description: file content
-->
<template>
  <div>
    <ul v-for="m in messageList" :key="m.id">
      <!-- to的字符串写法 -->
      <!-- <li>
        <router-link :to="`/home/message/detial?id=${m.id}&title=${m.title}`">{{
          m.title
        }}</router-link
        >&nbsp;&nbsp;
      </li> -->

      <!-- to的对象写法 -->
      <li>
        <router-link
          :to="{
            name: 'wuhuqifei',
            query: {
              id: m.id,
              title: m.title,
            },
          }"
          >{{ m.title }}
        </router-link>
        <button @click="pushShow(m)">跳转（push）</button>
        <button @click="replaceShow(m)">跳转（replace）</button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", title: "消息1" },
        { id: "002", title: "消息2" },
        { id: "003", title: "消息3" },
      ],
    };
  },
  methods: {
    pushShow(m) {
      this.$router.push({
        name: "wuhuqifei",
        query: {
          id: m.id,
          title: m.title,
        },
      });
    },
    replaceShow(m) {
      this.$router.replace({
        name: "wuhuqifei",
        query: {
          id: m.id,
          title: m.title,
        },
      });
    },
  },
};
</script>

<style>
</style>