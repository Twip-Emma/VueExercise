<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-18 20:56:17
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-10-18 21:00:26
 * @Description: file content
-->
<template>
  <div class="demo">{{ name }}==={{ add }}</div>
</template>

<script>
export default {
    data() {
        return {
            name:"湖南工程学院",
            add:"湘潭"
        }
    },
};
</script>

<style>
.demo{
    background-color: gray;
}
</style>