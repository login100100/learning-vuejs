<template>
    <div>
        <PostForm/>
        <Posts/>
    </div>
</template>

<script>
    import PostForm from '@/components/PostForm.vue'
    import Posts from '@/components/Posts.vue'

    export default {
        name: "PostsPage",
        components: {
            PostForm,
            Posts
        }
    }
</script>