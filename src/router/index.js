import Vue from 'vue'
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}


Vue.use(Router)

import Main from "../page/main.vue"
import Products from "../page/products.vue"
import About from "../page/about.vue"

const router = new Router({
    routes: [{
            path: '/',
            name: 'login',
            component: () =>
                import ("@/page/login.vue")
        }, {
            path: '/signup',
            name: 'signup',
            component: () =>
                import ("@/page/signup.vue")
        },
        {
            path: '/main',
            name: 'main',
            component: Main,
            meta: {
                auth: true //添加字段判断该页面是否需要登录
            }
        },
        {
            path: '/products',
            name: 'products',
            component: Products,
            meta: {
                auth: true //添加字段判断该页面是否需要登录
            }
        },
        {
            path: '/about',
            name: 'about',
            component: About,
            meta: {
                auth: true //添加字段判断该页面是否需要登录
            }
        }
    ]
})
router.beforeEach((to, from, next) => {
    let token = localStorage.getItem('ifLogin');
    if (to.meta.auth) {
        if (token) {
            next()
        } else {
            next({
                path: '/',
                // query: { redirect: to.fullPath }
            })
        }
    } else {
        next()
    }
})

export default router
// export default new Router({
//     routes: [{
//             path: '/',
//             name: 'login',
//             component: () =>
//                 import ("@/page/login.vue")
//         },
//         {
//             path: '/main',
//             name: 'main',
//             component: Main
//         },
//         {
//             path: '/products',
//             name: 'products',
//             component: Products
//         },
//         {
//             path: '/about',
//             name: 'about',
//             component: About
//         }
//     ]
// })