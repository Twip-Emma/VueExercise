/*
 * @Author: 七画一只妖
 * @Date: 2021-10-20 19:22:54
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-10-20 20:00:30
 * @Description: file content
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test1',
    name: 'test1',
    component: () => import(/* webpackChunkName: "about" */ '../components/test/Test1.vue')
  },
  {
    path: '/test2',
    name: 'test2',
    component: () => import(/* webpackChunkName: "about" */ '../components/test/Test2.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
