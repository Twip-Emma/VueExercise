/*
 * @Author: 七画一只妖
 * @Date: 2021-11-16 16:05:17
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-16 18:14:25
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
            path:"/about",
            component:About
        },
        {
            path:"/home",
            component:Home,
            children:[
                {
                    path:"news",
                    component:News
                },
                {
                    path:"message",
                    component:Message,
                    children:[
                        {
                            name:"wuhuqifei",
                            path:"detial/:id/:title",
                            component:Detial
                        }
                    ]
                },
            ]
        }
    ]
})