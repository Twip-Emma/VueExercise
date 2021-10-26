/*
 * @Author: 七画一只妖
 * @Date: 2021-10-13 19:38:00
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-10-26 21:57:45
 * @Description: file content
 */
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$axios = axios



axios.defaults.baseURL = '/api'
new Vue({
 render: h => h(App)
}).$mount('#app')
