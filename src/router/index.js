import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        // add meta to this route
        meta: {
            requiresAuth: true
        },
        beforeEnter: (to, from, next) => {
            if (to.name === 'Home') {
                console.log('Per-Route navigation guard ti wa online');

                next()
            } else next()
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ( /* webpackChunkName: "post" */ '../views/guest.vue')

    }, {
        path: '/:id',
        name: 'Post',
        props: true,
        meta: {
            requiresAuth: true
        },
        component: () =>
            import ( /* webpackChunkName: "post" */ '../views/Post.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, display guest greeting.
        const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));

        if (!loggedIn) {
            next({
                path: '/login'
            });
        } else {
            next();
        }
    } else {
        next(); // make sure to always call next()!
    }
})

export default router