<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-13 21:30:56
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-10-17 11:55:47
 * @Description: file content
-->
<template>
  <div>
    <div>{{ message }}</div>
    <button @click="getInfo">点我（GET）</button>
    <!-- <button>点爷2</button> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "测试2",
    };
  },
  methods: {
    getInfo() {
      // goToBack();
      jsReal()
    },
  },
};

//GET请求
function jsReal() {
  var httpRequest = new XMLHttpRequest();
  let userData = "这是数据这是数据这是数据这是数据这是数据这是数据"
  let url = "/api/testPost?userData=" + userData
  httpRequest.open("GET", url, true);
  httpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  httpRequest.send()

  httpRequest.onreadystatechange=function(){
    let re = httpRequest.response;
    // console.log(re)
    // re = "{\"name\":\"张三\"}"
    console.log(re)
    // re = JSON.parse(re)
    re = JSON.parse(new String(re))
    let re2=JSON.parse("{\"ji\":\"jiba\"}")
    console.log(re2)
    console.log(re["name"])
  }
}


</script>


<style>
</style>