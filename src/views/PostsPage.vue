<template>
    <div>
        <PostForm v-on:add-post="addPost"/>
        <Posts :Posts="Posts"/>
    </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue'
import Posts from '@/components/Posts.vue'
import axios from 'axios'

    export default {
        name: "PostsPage",
        components: {
            PostForm,
            Posts
        },
        data() {
            return {
                Posts: []
            }
        },
        methods: {
            addPost(post) {                
                // dispatch action, http call for now
                axios.post('http://localhost:4000/posts', post)
                .then(res => res.data)
                .then(res => this.Posts = [...this.Posts, res]);
            }
        },
        created() {
            //fetch api
            axios.get('http://localhost:4000/posts')
            .then(res => res.data)
            .then(data => this.Posts = data);
        }
    }
</script>