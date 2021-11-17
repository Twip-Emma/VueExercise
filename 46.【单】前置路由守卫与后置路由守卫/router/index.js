/*
 * @Author: 七画一只妖
 * @Date: 2021-11-16 16:05:17
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-16 22:06:19
 * @Description: file content
 */
import VueRouter from "vue-router";

import About from '../pages/About'
import Home from "../pages/Home"
import Message from '../pages/Message'
import News from "../pages/News"
import Detial from "../pages/Detial"

const router = new VueRouter({
    routes: [
        {
            path: "/about",
            component: About,
        },
        {
            path: "/home",
            component: Home,
            children: [
                {
                    path: "news",
                    component: News,
                    meta:{
                        isReal:true
                    },
                },
                {
                    path: "message",
                    component: Message,
                    meta:{
                        isReal:true
                    },
                    children: [
                        {
                            name: "wuhuqifei",
                            path: "detial",
                            component: Detial,
                            // 第一种最原始写法
                            // props:{id:"001",title:"你好啊"}

                            // 第二种写法params专用，把接收到的params参数自动放进props里面
                            // props:true

                            // 第三中写法query专用（常用写法），已提供参数：$route
                            props(route) {
                                return {
                                    id: route.query.id,
                                    title: route.query.title
                                }
                            }
                        }
                    ],
                },
            ]
        }
    ]
})

// 全局路由守卫（前置通知）初始化、切换前会被触发
router.beforeEach((to, _, next) => {
    if (to.meta.isReal) { // 权限校验
        if (localStorage.getItem("school") === "湖南工程学院") {
            next()
            console.log("欢迎您！")
        } else { console.log("你不是湖南工程学院的学生！") }
    } else {
        next()
    }
})

// 全局路由守卫（后置通知）初始化、切换后会被触发
router.afterEach((to, from) => {
    console.log("to and from are both route objects." , to , from)
})


export default router