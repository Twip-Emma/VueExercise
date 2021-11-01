<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-18 20:55:52
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-01 19:49:07
 * @Description: file content
-->
<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <School :getSchoolName="getSchoolName" />

    <!-- 使用v-on或者@ -->
    <!-- 使用  .once  限定只能触发一次 -->
    <!-- <Student v-on:qihuayizhiyao="getStudentName" /> -->

    <!-- 另一种写法：使用ref -->
    <Student ref="qihuayizhiyao" />

    <!-- 使用  .native  声明这是原生dom事件 -->
    <!-- 并且加到这个实例对象vcd的最外层div上 -->
    <!-- <Student ref="qihuayizhiyao" @click.native="qihuayizhiyao" /> -->
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue"
export default {
  name: "App",
  components: {
    School,Student
  },
  data() {
    return {
      msg:"你好啊"
    }
  },
  methods: {
    getSchoolName(name){
      console.log("app收到了学校名：" + name)
    },
    getStudentName(name){
      console.log("app收到了学生名：" + name)
    }
  },  
  mounted(){
    setTimeout(()=>{
      // this.$refs.qihuayizhiyao.$on("qihuayizhiyao",this.getStudentName)//正常写法
      this.$refs.qihuayizhiyao.$on("qihuayizhiyao",this.getStudentName)//限制只触发一次
    },3000)
  }
};
</script>

<style>
.app {
  background: orange;
  padding: 5px;
}
</style>