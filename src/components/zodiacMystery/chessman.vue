<template>
<v-flex :style="computedStyle">
    <component
        class="chessman"
        :is="type"
        :x="x"
        :y="y"
    ></component>
</v-flex>
</template>

<script>
import {
    chessboardSize
} from '@/constants/zodiacMystery'
import mixin from './mixin'
export default {
    name: 'Chessman',
    mixins: [mixin],
    computed: {
        type() {
            return this.$store.getters.getChessmanByPos(this.x, this.y).type;
        },
        computedStyle() {
            return {
                width: `${100/chessboardSize.x}%`
            }
        }
    },
    components: {
        Zodiac: () => import('./zodiac'),
        StellarRefractor: () => import('./stellarRefractor'),
        Block: () => import('./block')
    }
}
</script>

<style lang="less">
.chessman {
    position: relative;
    height: 0;
    width: 100%;
    padding-bottom: 100%;
    box-shadow: 0 0 0px 0.5px #000;
}

.chessman-container {
    font-size: 10px;
}
</style>
