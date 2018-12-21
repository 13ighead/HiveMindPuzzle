<template>
<div
    class="black--text"
    @click="click()"
>
    <div class="chessman-container" :class="{[this.params.className]: true, 'selected': params.selected}">
        <v-icon class="stellar-refractor-icon white--text">{{ params.icon }}</v-icon>
    </div>
   
</div>
</template>

<script>
import { mapActions } from 'vuex'

import mixin from './mixin'

export default {
    name: 'StellarRefractor',
    mixins: [mixin],
    computed: {
        params() {
            return this.$store.getters.getChessmanByPos(this.x, this.y);
        }
    },
    methods: {
        click() {
            console.log(this.x, this.y, this.params.selected)
            if (!this.params.selected) {
                this.toggleStellarRefractor({
                    x: this.x,
                    y: this.y
                })

                this.swtichZodiacTypeWithStellarRefractor({
                    x: this.x,
                    y: this.y,
                    type: this.params.value,
                    actionType: 'highlight'
                })
            }
            else {
                this.swtichZodiacTypeWithStellarRefractor({
                    x: this.x,
                    y: this.y,
                    type: this.params.value
                })
            }

            
        },
        ...mapActions([
            'swtichZodiacTypeWithStellarRefractor',
            'toggleStellarRefractor'
        ])
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
