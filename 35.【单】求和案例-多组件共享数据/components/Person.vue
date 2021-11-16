<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-14 13:03:28
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-14 13:29:33
 * @Description: file content
-->
<template>
  <div>
      <h1>人员列表</h1>
      <h3 style="color:red">Count组件求和为：{{sum}}</h3>
      <input type="text" v-model="name" placeholder="请输入名字">
      <button @click="add">添加</button>
      <ul>
          <li v-for="person in personList" :key="person.id">{{person.name}}</li>
      </ul>
  </div>
</template>

<script>
import {nanoid} from "nanoid"
export default {
    name:"Person",
    data() {
        return {
            name:""
        }
    },
    computed:{
        personList(){
            return this.$store.state.personList
        },
        sum(){
            return this.$store.state.sum
        }
    },
    methods: {
        add(){
            this.$store.dispatch("add",{id:nanoid(),name:this.name})
            this.name = ""
        }
    },
}
</script>

<style>

</style>