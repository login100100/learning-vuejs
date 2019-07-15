<template>
    <div class="container">
        <div v-bind:key="post.id" v-for="post in Posts">
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
import axios from 'axios';

    export default {
        name: 'Posts',
        props: {
           Posts: Array 
        },    
        data() {
            return {
            }
        },
        mounted() {
            //fetch api
            axios.get('http://localhost:4000/posts')
            .then(res => res.data)
            .then(data => this.Posts = data);
        }
    }
</script>

<style lang="scss" scoped>

</style>