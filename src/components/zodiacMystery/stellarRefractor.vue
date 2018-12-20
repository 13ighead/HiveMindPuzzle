<template>
<div
class="black--text"
:style="chessmanStyle"
>
    <div class="chessman-container">
        <v-icon class="stellar-refractor-icon">{{ params.icon }}</v-icon>
    </div>
   
</div>
</template>

<script>
import mixin from './mixin'

export default {
    name: 'StellarRefractor',
    mixins: [mixin],
    computed: {
        params() {
            return this.$store.getters.getChessmanByPos(this.x, this.y);
        }
    }
}
</script>

<style lang="less">
.stellar-refractor-icon {
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    font-size: 10px;
}
</style>
