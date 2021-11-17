<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-16 16:42:53
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-16 18:02:18
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
        <router-link :to="{
            path:'/home/message/detial',
            query:{
                id:m.id,
                title:m.title
            }
        }">{{
          m.title
        }}
        </router-link>
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
};
</script>

<style>
</style>