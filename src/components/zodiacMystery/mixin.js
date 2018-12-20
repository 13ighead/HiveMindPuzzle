export default {
    props: {
        x: {
            type: Number,
            required: true
        },
        y: {
            type: Number,
            required: true
        }
    },
    computed: {
        params() {
            return this.$store.getters.getChessmanByPos(this.x, this.y);
        },
        chessmanStyle() {
            return this.params.style
        }
    }
}