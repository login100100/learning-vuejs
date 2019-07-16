<template>
    <div class="container">
        <div v-bind:key="post.id" v-for="post in getAllPosts">
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
            ...mapActions(['fetchPosts'])
        },
        computed: {
            ...mapGetters(['getAllPosts'])
        },
        created() {
            this.fetchPosts();
        }
    }
</script>

<style lang="scss" scoped>

</style>