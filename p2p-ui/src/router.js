import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index,
            meta: {
                title: '首页',
            }
        },
        {
            path: '/bid',
            name: 'bid',
            component: Index,
            meta: {
                title: '我要投资',
            }
        },
        {
            path: '/',
            name: 'user',
            component: Index,
            meta: {
                title: '用户中心',
            }
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
            meta: {
                title: '关于我们',
            }
        },
        {
            path: '/bootstrap',
            name: 'bootstrap',
            component: () => import('@/views/Bootstrap.vue'),
            meta: {
                title: 'bootstrap',
            }
        },
    ]
})
