<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-03 16:18:20
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-03 18:48:04
 * @Description: file content
-->
<template>
  <div class="test">
      <button @click="isShow = !isShow">显示\隐藏</button>
      <transition name="hello" :appear="true">
          <h1 v-show="isShow" class="msg">{{msg}}</h1>
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
.msg {
    background: #ddd;
}

.hello-enter-active{
    animation: qihuayizhiyao 0.5s linear;
}

.hello-leave-active{
    animation: qihuayizhiyao 0.5s linear reverse;
}

@keyframes qihuayizhiyao{
    from{
        transform: translateX(-100%);
    }
    to{
        transform: translateX(0px);
    }
}
</style>