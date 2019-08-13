<template>
    <div class="container">
        <Post v-for="post in posts" v-bind:key="post.id" :title="post.title" :description="post.description"></Post>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import PostsModule from '@/store/modules/Posts.module';
import Post from '@/components/Post.vue';

@Component({
    components: {
        Post
    }
})
export default class Posts extends Vue {
    // dynamic PostsModule have different syntax for accessing module parameters and methods
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