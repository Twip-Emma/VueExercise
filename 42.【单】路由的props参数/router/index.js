/*
 * @Author: 七画一只妖
 * @Date: 2021-11-16 16:05:17
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-16 18:39:47
 * @Description: file content
 */
import VueRouter from "vue-router";

import About from '../pages/About'
import Home from "../pages/Home"
import Message from '../pages/Message'
import News from "../pages/News"
import Detial from "../pages/Detial"

export default new VueRouter({
    routes: [
        {
            path: "/about",
            component: About
        },
        {
            path: "/home",
            component: Home,
            children: [
                {
                    path: "news",
                    component: News
                },
                {
                    path: "message",
                    component: Message,
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