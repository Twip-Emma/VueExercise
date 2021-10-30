<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-26 21:50:17
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-10-26 21:54:18
 * @Description: file content
-->
<template>
  <div @click="showName">
      学生姓名：{{name}}
  </div>
</template>

<script>
export default {
    data() {
        return {
            name:"张三"
        }
    },
    methods:{
        showName(){
            alert(this.name)
        }
    }
}
</script>

<style>

</style>