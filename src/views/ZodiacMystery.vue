<template>
<v-container class="zodiac-mystery">
    <v-layout
        text-xs-center
        wrap
    >
        <v-flex xs12>
            <!-- <h1 class="title font-weight-bold mb-3">This is zodiac-mystery page</h1> -->
        </v-flex>
    </v-layout>
    <chessboard></chessboard>
</v-container>
</template>

<script>
export default {
    name: 'ZodiacMystery',
    components: {
        chessboard: () => import('@/components/zodiacMystery/chessboard')
    }
}
</script>

<style lang="less">

</style>
