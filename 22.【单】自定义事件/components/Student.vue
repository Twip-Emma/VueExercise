<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-18 22:19:50
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-01 16:26:24
 * @Description: file content
-->
<template>
  <div class="demo">
      <h1>{{name}}</h1>
      <h1>{{add}}</h1>
      <button @click="sendStudentName">点我触发deemo</button>
  </div>
</template>

<script>
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
            this.$emit("qihuayizhiyao",this.name)
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
