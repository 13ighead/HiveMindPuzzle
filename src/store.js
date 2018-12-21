import Vue from 'vue'
import Vuex from 'vuex'

import {
    chessboard,
    chessboardSize,
    zodiacType,
    stellarRefractorType,
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
        toggleStellarRefractor (state, pos) {
            const index = pos.x * chessboardSize.x + pos.y
            if (Object.keys(stellarRefractorType).indexOf(state.chessboard[index].value) == -1) {
                return false;
            }

            const selectedIndex = state.chessboard.findIndex(item => {
                return item.selected
            })

            if (selectedIndex >= 0) {
                const selectedParams = Object.assign({}, state.chessboard[selectedIndex], {
                    selected: false
                })

                Vue.set(state.chessboard, selectedIndex, selectedParams)
            }

            const targetTypeParams = Object.assign({}, state.chessboard[index], {
                selected: !state.chessboard[index].selected
            })

            Vue.set(state.chessboard, index, targetTypeParams)
        },
        switchZodiacType (state, pos) {
            const index = pos.x * chessboardSize.x + pos.y
            const targetType = state.chessboard[index].nextType
            const targetTypeParams = zodiacType[targetType]
            if (Object.keys(zodiacType).indexOf(state.chessboard[index].value) == -1) {
                return false;
            }
            if (targetTypeParams) {
                Vue.set(state.chessboard, index, targetTypeParams)
            }
        },
        unhighlightAllZodiacType (state) {
            state.chessboard.map((item, index) => {
                if (item.highlight) {
                    Vue.set(state.chessboard, index, Object.assign({}, item, {
                        highlight: false
                    }))
                }
            })
        },
        highlightZodiacType (state, pos) {
            const index = pos.x * chessboardSize.x + pos.y
            const targetTypeParams = Object.assign({}, state.chessboard[index], {
                highlight: true
            })

            if (Object.keys(zodiacType).indexOf(state.chessboard[index].value) == -1) {
                return false;
            }
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
        toggleStellarRefractor ({ commit }, pos) {
            commit('toggleStellarRefractor', pos)
        },
        switchZodiacType ({ commit }, pos) {
            commit('switchZodiacType', pos)
        },
        unhighlightAllZodiacType ({ commit }) {
            commit('unhighlightAllZodiacType');
        },
        swtichZodiacTypeWithStellarRefractor ({ commit, state }, { x, y, type, actionType }) {
            let index;
            let mutationType = (actionType === 'highlight') ? 'highlightZodiacType' : 'switchZodiacType'

            if (actionType === 'highlight') {
                commit('unhighlightAllZodiacType');
            }
            switch (type) {
                case '+':
                    for (let i = x - 1; i >= 0; i--) {
                        index = i * chessboardSize.x + y
                        if (Object.keys(zodiacType).indexOf(state.chessboard[index].value) == -1) {
                            break;
                        }

                        commit(mutationType, {
                            x: i,
                            y: y
                        })
                    }
                    for (let i = x + 1; i < chessboardSize.x; i++) {
                        index = i * chessboardSize.x + y
                        if (Object.keys(zodiacType).indexOf(state.chessboard[index].value) == -1) {
                            break;
                        }

                        commit(mutationType, {
                            x: i,
                            y: y
                        })
                    }
                    for (let j = y - 1; j >= 0; j--) {
                        index = x * chessboardSize.x + j
                        if (Object.keys(zodiacType).indexOf(state.chessboard[index].value) == -1) {
                            break;
                        }

                        commit(mutationType, {
                            x: x,
                            y: j
                        })
                    }
                    for (let j = y + 1; j < chessboardSize.y; j++) {
                        index = x * chessboardSize.x + j
                        if (Object.keys(zodiacType).indexOf(state.chessboard[index].value) == -1) {
                            break;
                        }
                        
                        commit(mutationType, {
                            x: x,
                            y: j
                        })
                    }
                    break;
                case 'x':
                    for (let n = 0; n < 4; n++) {
                        let i = x;
                        let j = y;
                        let dx;
                        let dy;
                        switch(n) {
                            case 0:
                                dx = -1;
                                dy = -1;
                                break;
                            case 1:
                                dx = -1;
                                dy = 1;
                                break;
                            case 2:
                                dx = 1;
                                dy = -1;
                                break;
                            case 3:
                                dx = 1;
                                dy = 1;
                                break;
                            default:
                                break;
                        }
                        while (true) {
                            i = i + dx;
                            j = j + dy;
                            index = i * chessboardSize.x + j
                            if (!state.chessboard[index] || (Object.keys(zodiacType).indexOf(state.chessboard[index].value) == -1)) {
                                break;
                            }
                            
                            commit(mutationType, {
                                x: i,
                                y: j
                            })
                        }
                    }
                    break;
                case 'o':
                    for (let i = x - 1; i <= x + 1; i++) {
                        for (let j = y - 1; j <= y + 1; j++) {
                            index = i * chessboardSize.x + j
                            if ((index < 0) || (index === x * chessboardSize.x + y) || (Object.keys(zodiacType).indexOf(state.chessboard[index].value) == -1)) {
                                continue;
                            }

                            commit(mutationType, {
                                x: i,
                                y: j
                            })
                        }
                    }
                    break;
                default:
                    break;
            }
        } 
    }
})
