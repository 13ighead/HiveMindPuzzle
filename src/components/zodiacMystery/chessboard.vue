<template>
<v-layout text-xs-center wrap class="chessboard">
    <template v-for="x in size.x">
        <template v-for="y in size.y">
            <chessman :key="x * (size.x) + y" :x="x-1" :y="y-1" />
        </template>
    </template>
</v-layout>
</template>

<script>
import {
    chessboardSize
} from '@/constants/zodiacMystery'
export default {
    name: 'Chessboard',
    components: {
        chessman: () => import('./chessman')
    },
    data() {
        return {
            size: chessboardSize
        }
    }
}
</script>

<style lang="less">
.chessboard {
    width: 100%;
}
</style>
