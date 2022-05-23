import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Login',
            component: () =>
                import ("@/page/login.vue")
        },
        {
            path: '/main',
            name: 'Main',
            component: () =>
                import ("@/page/main.vue")
        },
        {
            path: '/products',
            name: 'Products',
            component: () =>
                import ("@/page/products.vue")
        },
        {
            path: '/about',
            name: 'About',
            component: () =>
                import ("@/page/about.vue")
        }
    ]
})