<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-08 10:37:14
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-14 12:52:24
 * @Description: file content
-->
<template>
  <div>
      <h1>当前求和为：{{sum}}</h1>
      <h2>这个数字放大十倍是：{{bigSum}}</h2>
      <h2>我是{{stuName}}，我在学习{{subject}}</h2>
      <select v-model="n">
          <option :value="1">1</option>
          <option :value="2">2</option>
          <option :value="3">3</option>
      </select>
      <button @click="increment(n)">+</button>
      <button @click="decrement(n)">-</button>
      <button @click="incrementOdd(n)">当前求和为奇数再加</button>
      <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from "vuex"
export default {
    name:"Count",
    data() {
        return {
            n:1
        }
    },
    computed:{
        //一般写法
        ...mapState({stuName:"stuName",subject:"subject",sum:"sum"}),
        ...mapGetters({bigSum:"bigSum"}),

        //数组写法（简写）
        // ...mapState(["stuName","subject","sum"]),

        
    },
    methods:{
        // ...mapMutations({}),
        ...mapActions({increment:"increment",decrement:"decrement",incrementOdd:"incrementOdd",incrementWait:"incrementWait"})
        // increment(){
        //     this.$store.dispatch("increment",this.n)
        // },
        // decrement(){
        //     this.$store.dispatch("decrement",this.n)
        // },
        // incrementOdd(){
        //     this.$store.dispatch("incrementOdd",this.n)
        // },
        // incrementWait(){
        //     this.$store.dispatch("incrementWait",this.n)
        // }
    },
    mounted() {
        console.log(this)
    },
}
</script>

<style>

</style>