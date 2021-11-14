/*
 * @Author: 七画一只妖
 * @Date: 2021-10-13 19:38:00
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-13 13:28:12
 * @Description: file content
 */
import Vue from 'vue'
import App from './App.vue'
import store from "./store"

Vue.config.productionTip = false


new Vue({
  el:"#app",
  render: h => h(App),
  store:store,
  beforeCreate(){
    Vue.prototype.$bus = this
  }
})
