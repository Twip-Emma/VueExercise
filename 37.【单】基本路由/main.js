/*
 * @Author: 七画一只妖
 * @Date: 2021-10-13 19:38:00
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-16 16:11:08
 * @Description: file content
 */
import Vue from 'vue'
import App from './App.vue'

import VueRouter from "vue-router"
import router from "./router"

Vue.use(VueRouter)

Vue.config.productionTip = false


new Vue({
  el:"#app",
  render: h => h(App),
  router:router,
})
