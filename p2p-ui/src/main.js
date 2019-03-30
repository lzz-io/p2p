import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'
import $ from 'jquery'
import 'bootstrap'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
