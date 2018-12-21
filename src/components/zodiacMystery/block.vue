<template>
<div
    :class="this.params.className"
>
    <div class="chessman-container"></div>
</div>  
</template>

<script>
import mixin from './mixin'

export default {
    name: 'Block',
    mixins: [mixin],
    computed: {
        params() {
            return this.$store.getters.getChessmanByPos(this.x, this.y);
        }
    }
}
</script>

<style lang="less">

</style>
