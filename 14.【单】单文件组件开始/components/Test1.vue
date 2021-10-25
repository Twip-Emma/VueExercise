<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-13 19:39:55
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-10-18 12:53:35
 * @Description: file content
-->
<template>
  <div>
    <h1>{{ message }}</h1>
    <div id="root">
      <form @submit.prevent="getInfo" method="POST">
        账号：<input type="text" v-model="userInfo.card" /><br /><br />
        密码：<input type="text" v-model="userInfo.pass" /><br /><br />
        年龄：<input type="text" v-model="userInfo.age" /><br /><br />
        性别：
        <input type="radio" name="sex" v-model="userInfo.sex" value="男" />男
        <input
          type="radio"
          name="sex"
          v-model="userInfo.sex"
          value="女"
        />女<br /><br />
        爱好： 吃饭<input
          type="checkbox"
          v-model="userInfo.hobby"
          value="吃饭"
        />
        睡觉<input type="checkbox" v-model="userInfo.hobby" value="睡觉" />
        打豆豆<input
          type="checkbox"
          v-model="userInfo.hobby"
          value="打豆豆"
        /><br />
        所属校区：
        <select v-model="userInfo.addareas">
          <option value="">请选择</option>
          <option
            v-for="(item, index) in addareas"
            :value="item.value"
            :key="index"
          >
            {{ item.name }}
          </option></select
        ><br /><br />
        其他说明
        <textarea v-model.lazy="userInfo.textInfo"></textarea><br /><br />
        <input
          type="checkbox"
          v-model="userInfo.isRead"
          true-value="yes"
          false-value="no"
        />我已阅读并同意<a href="https://www.baidu.com">《用户手册》</a>
        <button type="submit">提交（POST）</button>
      </form>
      <hr />
      <!-- <button @click="getInfo2">点我</button> -->
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  data() {
    return {
      message: "你好，世界",
      userInfo: {
        card: "",
        pass: "",
        age: "",
        sex: "",
        hobby: [],
        addareas: "",
        textInfo: "",
        isRead: "no",
      },
      addareas: [
        { name: "=滨江=", value: "滨江" },
        { name: "=亲民=", value: "亲民" },
        { name: "=明德=", value: "明德" },
        { name: "=学海=", value: "学海" },
      ],
    };
  },
  methods: {
    getInfo() {
      console.log(JSON.stringify(this.userInfo));
      let userData = JSON.stringify(this.userInfo);
      loadXMLDoc(userData);
    },
  },
};

//POST请求
function loadXMLDoc(userData) {
  var httpRequest = new XMLHttpRequest();
  let url = "/api/newUser"
  httpRequest.open("POST", url, true);
  httpRequest.setRequestHeader("Access-Control-Allow-Origin", "*");
  httpRequest.send(userData);

  httpRequest.onreadystatechange=function(){
    let re = httpRequest.responseText;
    console.log(re)
  }
}
</script>

<style>
h1 {
  text-align: center;
}
</style>