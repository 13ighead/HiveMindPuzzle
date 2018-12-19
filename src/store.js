import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isDark: true
    },
    mutations: {
        toggleDarkMode (state) {
            state.isDark = !state.isDark
        }
    },
    actions: {

    }
})
