<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-18 22:19:50
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-10-18 22:25:21
 * @Description: file content
-->
<template>
<div>
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDom">点我输出上方DOM元素</button>
</div>
</template>

<script>
export default {
    name:"Student",
    data() {
        return {
            msg:"这是msg数据"
        }
    },
    methods: {
        showDom(){
            console.log(this.$refs.title)
        }
    },
}
</script>

<style>

</style>
