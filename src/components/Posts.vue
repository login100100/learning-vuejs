<template>
    <div class="container">
        <div v-bind:key="post.id" v-for="post in POSTS_GET_ALL">
            <h2>
                {{post.title}}
            </h2>
            <p>
                {{post.description}}
            </p>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
    export default {
        name: 'Posts',
        methods: {
            ...mapActions(['POSTS_FETCH'])
        },
        computed: {
            ...mapGetters(['POSTS_GET_ALL'])
        },
        created() {
            this.POSTS_FETCH;
        }
    }
</script>

<style lang="scss" scoped>

</style>