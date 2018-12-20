<template>
<v-app :dark="isDark">
    <v-toolbar>
        <v-toolbar-side-icon v-if="isHomePage"></v-toolbar-side-icon>
        <v-btn v-else icon :to="{name: 'Home'}">
            <v-icon>arrow_back</v-icon>
        </v-btn>
        
        <v-spacer></v-spacer>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="toggleDarkMode()">
            <v-icon>{{ isDark ? 'wb_incandescent' : 'brightness_3' }}</v-icon>
        </v-btn>
    </v-toolbar>
    <v-content>
        <router-view></router-view>
    </v-content>
</v-app>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'App',
    data () {
        return {}
    },
    computed: {
        title () {
            return this.$store.state.title
        },
        isDark () {
            return this.$store.state.isDark
        },
        isHomePage () {
            return this.$route.name === 'Home'
        }
    },
    methods: {
        ...mapActions([
            'toggleDarkMode'
        ])
    }
}
</script>
