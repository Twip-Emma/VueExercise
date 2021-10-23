<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-18 22:19:50
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-10-18 22:33:35
 * @Description: file content
-->
<template>
<div>
    <h1 v-text="msg" ref="title"></h1>
    <h1>学生姓名：{{name}}</h1>
    <h1>学生性别：{{sex}}</h1>
    <h1>学生年龄：{{realAge}}</h1>
    <button @click="ageAdd">点我让上面的同学年龄+1</button>
</div>
</template>

<script>
export default {
    name:"Student",
    data() {
        return {
            msg:"这是msg数据",
            realAge:this.age
        }
    },
    methods:{
        ageAdd(){
            this.realAge ++ 
        }
    }
    ,
    props:["name","sex","age"]
}
</script>

<style>

</style>
