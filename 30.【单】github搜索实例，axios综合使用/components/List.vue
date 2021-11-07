<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-04 19:18:40
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-04 20:21:08
 * @Description: file content
-->
<template>
  <div class="row">
    <div class="card" v-for="user in users" :key="user.login">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
      return {
          users:[]
      }
  },
  mounted(){
      this.$bus.$on("sendUserInfo",(data)=>{
          console.log("我是List组件，我收到了数据：")
          console.log(data)
          this.users = data
      })
  },
  beforeDestroy(){
      this.$bus.$off("sendUserInfo")
  }
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>