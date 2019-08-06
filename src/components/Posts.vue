<template>
    <div class="container">
        <div v-bind:key="post.id" v-for="post in posts">
            <h2>
                {{post.title}}
            </h2>
            <p>
                {{post.description}}
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import PostsModule from '@/store/modules/Posts.module';

@Component
export default class Posts extends Vue {
    get posts() {
        return PostsModule.$POSTS;
    }

    created() {
        PostsModule.getAllPosts();
    }
}
</script>

<style lang="scss" scoped>

</style>