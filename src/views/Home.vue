<template>
<v-container>
    <v-layout
        text-xs-center
        wrap
    >
        <v-flex
            xs4 offset-xs4
            sm4 offset-sm4
            md6 offset-md0
            lg4 offset-lg0
            mb-3
        >
            <v-img
                :src="require('@/assets/the-hivemind-mount.jpg')"
                :lazy-src="require('@/assets/the-hivemind-mount.jpg')"
                aspect-ratio="1"
                :class="isDark ? 'grey darken-4' : 'grey lighten-2'"
            >
                <v-layout
                    slot="placeholder"
                    fill-height
                    align-center
                    justify-center
                    ma-0
                >
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
            </v-img>
        </v-flex>
        <v-flex
            xs12
            sm12
            md6
            lg8
            mb-3
        >
            <!-- <h1 class="title font-weight-bold mb-3">
                主脑解谜
            </h1> -->
            <p class="subheading font-weight-regular">
                主脑解谜是将WoW8.1版本新加入的解谜坐骑中一些解谜步骤独立出来的小游戏集合
            </p>
        </v-flex>
    </v-layout>
    <v-layout row wrap>
        <v-flex
            v-for="card in cards"
            v-bind="{ [`xs${card.flex}`]: true }"
            :key="card.title"
            mb-4
        >
            <v-card
                :to="{name: card.viewName}"
            >
                <v-img
                    :src="card.src"
                    height="200px"
                >
                    <v-container
                        fill-height
                        fluid
                        pa-2
                    >
                        <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                                <span class="headline white--text" v-text="card.title"></span>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-img>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>

export default {
    data() {
        return {
            cards: [
                {
                    title: '星座迷踪',
                    src: require('@/assets/zodiac-mystery.jpg'),
                    flex: 12,
                    viewName: 'ZodiacMystery'
                },
                {
                    title: '闪转腾挪',
                    src: require('@/assets/jumping-puzzle.jpg'),
                    flex: 12,
                    viewName: 'JumpingPuzzle'
                },
                {
                    title: '奥术熔岩',
                    src: require('@/assets/arcane-lava.jpg'),
                    flex: 12,
                    viewName: 'ArcaneLava'
                }
            ]
        }
    },
    computed: {
        isDark () {
            return this.$store.state.isDark
        }
    }
}
</script>
