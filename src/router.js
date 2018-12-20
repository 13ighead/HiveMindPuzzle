import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {
                title: '主脑解谜'
            }
        },
        {
            path: '/about',
            name: 'About',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ './views/About.vue'),
            meta: {
                title: '关于'
            }
        },
        {
            path: '/zodiac-mystery',
            name: 'ZodiacMystery',
            component: () => import('./views/ZodiacMystery'),
            meta: {
                title: '星座迷踪'
            }
        },
        {
            path: '/jumping-puzzle',
            name: 'JumpingPuzzle',
            component: () => import('./views/JumpingPuzzle'),
            meta: {
                title: '闪转腾挪'
            }
        },
        {
            path: '/arcane-lava',
            name: 'ArcaneLava',
            component: () => import('./views/ArcaneLava'),
            meta: {
                title: '奥术熔岩'
            }
        }
    ]
})
