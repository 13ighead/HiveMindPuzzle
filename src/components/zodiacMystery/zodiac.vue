<template>
<div
    :class="this.params.className"
>
    <div class="chessman-container"></div>
</div>  
</template>

<script>
import { mapActions } from 'vuex'

import mixin from './mixin'

export default {
    name: 'Zodiac',
    mixins: [mixin],
    methods: {
        click() {
            console.log(this.x, this.y)
            this.switchZodiacType({
                x: this.x,
                y: this.y
            })
        },
        ...mapActions([
            'switchZodiacType'
        ])
    }
}
</script>

<style lang="less">
</style>
