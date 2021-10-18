<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-13 19:27:09
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-10-13 19:31:59
 * @Description: file content
-->
<template>
    <div>
        <h1>{{message}}</h1>
    </div>
</template>


<script>
export default {
    data() {
        return {
            message:"这是单文件组件"
        }
    },
}
</script>


<style scoped>
h1{
    font-size: 2em;
    text-align: center;
}
</style>