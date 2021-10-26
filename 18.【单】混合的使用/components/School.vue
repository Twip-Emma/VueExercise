<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-26 21:50:17
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-10-26 22:16:25
 * @Description: file content
-->
<template>
  <div @click="showName">
      学校名称：{{name}}
  </div>
</template>

<script>
import mixin from './mixin'
export default {
    data() {
        return {
            name:"湖南工程学院"
        }
    },
    mixins:[mixin]
}
</script>

<style>

</style>