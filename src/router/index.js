import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Main from "../page/main.vue"
import Products from "../page/products.vue"
import About from "../page/about.vue"

export default new Router({
    routes: [{
            path: '/',
            name: 'login',
            component: () =>
                import ("@/page/login.vue")
        },
        {
            path: '/main',
            name: 'main',
            component: Main
        },
        {
            path: '/products',
            name: 'products',
            component: Products
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})