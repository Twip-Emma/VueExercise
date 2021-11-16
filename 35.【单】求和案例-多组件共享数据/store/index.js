/*
 * @Author: 七画一只妖
 * @Date: 2021-11-13 13:19:50
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-14 13:20:11
 * @Description: file content
 */

import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const actions = {
    increment(context,value){
        context.commit("_increment",value)
    },
    decrement(context,value){
        context.commit("_decrement",value)
    },
    incrementOdd(context,value){
        if(context.state.sum % 2){
            context.commit("_increment",value)
        }
    },
    incrementWait(context,value){
        setTimeout(()=>{
            context.commit("_increment",value)
        },500)
    },
    add(context,value){
        context.commit("_add",value)
    }
}
const mutations = {
    _increment(state,value){
        state.sum += value
    },
    _decrement(state,value){
        state.sum -= value
    },
    _add(state,value){
        state.personList.unshift(value)
    }
}
const state = {
    personList:[{id:"xxx",name:"张三"}],
    stuName:"张三",
    subject:"前端",
    sum:0
}
const getters = {
    bigSum(state){
        return state.sum*10
    }
}

export default new Vuex.Store({
    actions:actions,
    mutations:mutations,
    state:state,
    getters
})