<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-03 16:18:20
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-03 18:47:20
 * @Description: file content
-->
<template>
  <div>
      <button @click="isShow = !isShow">显示\隐藏</button>
      <transition name="hello" :appear="true">
          <h1 v-show="isShow">{{msg}}</h1>
      </transition>
  </div>
</template>

<script>
export default {
    name:"Test",
    data() {
        return {
            msg:"这是组件内",
            isShow:true
        }
    },
}
</script>

<style scoped>

h1{
    background-color: orange;
    
}
.hello-enter-active,.hello-leave-active{
    transform: 0.5s linear;
}

.hello-enter,.hello-leave-to{
    transform: translateX(-100%);
}

.hello-leave,.hello-enter-to{
    transform: translateX(0);
}

</style>