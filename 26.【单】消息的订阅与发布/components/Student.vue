<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-18 22:19:50
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-01 21:39:03
 * @Description: file content
-->
<template>
  <div class="demo">
      <h1>{{name}}</h1>
      <h1>{{add}}</h1>
      <button @click="sendStudentName">点我发送数据</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js"
export default {
    name:"Student",
    data() {
        return {
            name:"张三",
            add:"三栋四楼"
        }
    },
    methods:{
        sendStudentName(){
            //发送消息
            pubsub.publish("qihuayizhiyao",123)
        }
    }
}
</script>

<style scoped>
.demo{
    background-color: skyblue;
    padding: 5px;
    margin-top: 30px;
}
</style>
