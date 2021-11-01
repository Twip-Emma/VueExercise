<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-18 20:56:17
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-01 21:40:42
 * @Description: file content
-->
<template>
  <div class="demo">
      <h1>{{name}}</h1>
      <h1>{{add}}</h1>
  </div>
</template>

<script>
import pubsub from "pubsub-js"
export default {
    props:["getSchoolName"],
    data() {
        return {
            name:"湖南工程学院",
            add:"湘潭"
        }
    },
    mounted(){
        //订阅消息，接收者
        pubsub.subscribe("qihuayizhiyao",function(msgName,data){
            console.log("有人发布了qihuayizhiyao消息，回调被执行了！" + msgName + "||" + data)
        })
    }
};
</script>

<style scoped>
.demo{
    background-color: gray;
    padding: 5px;
}
</style>