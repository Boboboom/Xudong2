// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/main.css'
import axios from './axios/request'

//引入bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

//引入自适应
import 'lib-flexible/flexible'
// import './components/rem'

//引入多语言
import i18n from './i18n'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$axios = axios


/* eslint-disable no-new */
new Vue({
    el: '#app',
    i18n,
    router,
    components: { App },
    template: '<App/>'
})