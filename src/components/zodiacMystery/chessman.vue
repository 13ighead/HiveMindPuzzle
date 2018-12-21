<template>
<v-flex :style="computedStyle">
    <component
        class="chessman"
        :class="{'highlight': params.highlight}"
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
@keyframes blingbling {
    from {
        background: rgba(255, 255, 255, 0);
    }
    to {
        background: rgba(255, 255, 255, .4);
    }
}
.chessman {
    position: relative;
    height: 0;
    width: 100%;
    padding-bottom: 100%;

    &.highlight {
        background: rgba(255, 255, 255, .4);
    }
}

.chessman-container {
    font-size: 10px;
    position: absolute;
    top: 10%;
    border-radius: 100%;
    right: 10%;
    bottom: 10%;
    left: 10%;
}
</style>
