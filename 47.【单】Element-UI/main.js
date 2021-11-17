/*
 * @Author: 七画一只妖
 * @Date: 2021-10-13 19:38:00
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-17 10:37:52
 * @Description: file content
 */
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.config.productionTip = false


new Vue({
  el:"#app",
  render: h => h(App),
})
