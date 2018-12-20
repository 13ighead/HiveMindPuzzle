import Vue from 'vue'
import Vuex from 'vuex'

import {
    chessboard,
    chessboardSize,
    chessmanType
} from '@/constants/zodiacMystery'

Vue.use(Vuex)

let chessboardArray = chessboard.split('').map(item => {
    return chessmanType[item]
})

export default new Vuex.Store({
    state: {
        title: '',
        isDark: true,
        chessboard: chessboardArray
    },
    getters: {
        getChessmanByPos: (state) => (x, y) => {
            return state.chessboard[x * chessboardSize.x + y]
        }
    },
    mutations: {
        setTitle (state, title) {
            state.title = title
        },
        toggleDarkMode (state) {
            state.isDark = !state.isDark
        },
        switchZodiacType (state, pos) {
            const index = pos.x * chessboardSize.x + pos.y
            const targetType = state.chessboard[index].nextType
            const targetTypeParams = chessmanType[targetType]
            if (targetTypeParams) {
                Vue.set(state.chessboard, index, targetTypeParams)
            }
        }
    },
    actions: {
        setTitle ({ commit }, title) {
            commit('setTitle', title)
        },
        toggleDarkMode ({ commit }) {
            commit('toggleDarkMode')
        },
        switchZodiacType ({ commit }, pos) {
            commit('switchZodiacType', pos)
        }
    }
})
