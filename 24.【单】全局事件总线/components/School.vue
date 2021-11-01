<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-18 20:56:17
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-01 20:57:09
 * @Description: file content
-->
<template>
  <div class="demo">
      <h1>{{name}}</h1>
      <h1>{{add}}</h1>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name:"湖南工程学院",
            add:"湘潭"
        }
    },
    mounted() {
        this.$bus.$on("qihuayizhiyao",(data)=>{
            console.log("我是School组件，我收到了数据：" + data)
        })
    },
};
</script>

<style scoped>
.demo{
    background-color: gray;
    padding: 5px;
}
</style>