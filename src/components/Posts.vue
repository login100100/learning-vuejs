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
    export default {
        name: 'Posts',
        props: {
           Posts: Array 
        }
    }
</script>

<style lang="scss" scoped>

</style>