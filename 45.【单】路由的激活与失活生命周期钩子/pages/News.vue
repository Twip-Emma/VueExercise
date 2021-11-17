<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-16 16:43:12
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-16 21:14:34
 * @Description: file content
-->
<template>
  <ul>
    <li :style="{ opacity }">欢迎学习Vue</li>
    <li>news001 <input type="text" /></li>
    <li>news002 <input type="text" /></li>
    <li>news003 <input type="text" /></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1,
    };
  },
  //   beforeDestroy() {
  //       clearInterval(this.timer)
  //   },
  //   mounted() {
  //       this.timer = setInterval(() => {
  //           this.opacity -= 0.01
  //           if(this.opacity <= 0){
  //               this.opacity = 1
  //           }
  //       }, 16);
  //   },
  //组件激活时触发
  activated() {
    this.timer = setInterval(() => {
      this.opacity -= 0.01;
      console.log("@")
      if (this.opacity <= 0) {
        this.opacity = 1;
      }
    }, 16);
  },
   //组件失活时触发
  deactivated() {
    clearInterval(this.timer);
  },
};
</script>

<style>
</style>