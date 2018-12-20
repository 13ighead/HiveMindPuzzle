import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
    const title = to.meta.title
    /* 路由发生变化修改页面title */
    if (title) {
        document.title = title
        store.dispatch('setTitle', title);
    }
    next()
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
