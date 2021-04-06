//配置路由的相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'

import Login from '../views/Login.vue'
// 通过vue.use(插件)安装插件
Vue.use(VueRouter);
// 创建vuerouter对象
const routes = [{
    path: '',
    redirect: '/login'
}, {
    path: '/login',
    component: Login
}]

const router = new VueRouter({
    // 配置路由和组件之间的应用关系
    routes,
    mode: 'hash',
    linkActiveClass: 'active'
})

export default router