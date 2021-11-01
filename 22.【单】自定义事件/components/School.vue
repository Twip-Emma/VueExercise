<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-18 20:56:17
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-01 16:21:19
 * @Description: file content
-->
<template>
  <div class="demo">
      <h1>{{name}}</h1>
      <h1>{{add}}</h1>
      <button @click="sendSchoolName">点我获取学校名</button>
  </div>
</template>

<script>
export default {
    props:["getSchoolName"],
    data() {
        return {
            name:"湖南工程学院",
            add:"湘潭"
        }
    },
    methods:{
        sendSchoolName(){
            this.getSchoolName(this.name)
        }
    }
};
</script>

<style scoped>
.demo{
    background-color: gray;
    padding: 5px;
}
</style>