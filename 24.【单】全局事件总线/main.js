/*
 * @Author: 七画一只妖
 * @Date: 2021-10-13 19:38:00
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-01 20:59:20
 * @Description: file content
 */
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$axios = axios

// const Demo = Vue.extend({})
// const d = new Demo()
// Vue.prototype.x = d

axios.defaults.baseURL = '/api'
new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this //安装全局事件总线（傀儡）
  }
}).$mount('#app')
