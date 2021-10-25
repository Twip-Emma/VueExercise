/*
 * @Author: 七画一只妖
 * @Date: 2021-10-13 19:38:00
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-10-13 21:20:33
 * @Description: file content
 */
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'

Vue.config.productionTip = false

Vue.prototype.$axios = axios



axios.defaults.baseURL = '/api'
new Vue({
 router,
 render: h => h(App)
}).$mount('#app')
