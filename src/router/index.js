//配置路由的相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'

import Login from '../views/Login.vue'
import Demo from '../views/demo/demo.vue'
// 通过vue.use(插件)安装插件
Vue.use(VueRouter);

/* Layout */
import Layout from '@/layout'

// 创建vuerouter对象
const routes = [{
        path: '/redirect',
        component: Layout,
        hidden: true,
        children: [{
            path: '/redirect/:path(.*)',
            component: () =>
                import ('@/views/redirect/index')
        }]
    },
    {
        path: '/',
        component: Layout,
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        hidden: true // hidden:true  表示不在sidebar中渲染
    },
    {
        path: '/demo',
        name: 'demo',
        component: Demo,
        hidden: false // hidden:true  表示不在sidebar中渲染
    },
]

const router = new VueRouter({
    // 配置路由和组件之间的应用关系
    routes,
    mode: 'hash',
    linkActiveClass: 'active'
})

export default router