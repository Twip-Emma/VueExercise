<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-08 10:37:14
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-08 10:46:19
 * @Description: file content
-->
<template>
  <div>
      <button @click="getData">点我获取数据</button>
      {{data}}
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            data:""
        }
    },
    methods:{
        getData(){
            axios.get("/book").then(
                response => {
                    console.log(response.data)
                    this.data = response.data
                    console.log(JSON.stringify(response.data))
                },
                error => {
                    console.log(error.message)
                }
            )
        }
    }
}
</script>

<style>

</style>