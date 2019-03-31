import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap'

Vue.config.productionTip = false

// 页面设置title
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title + " - " + document.title
    }
    next()
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
