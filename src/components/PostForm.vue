<template>
    <div class="container">
        <form @submit="onSubmit">
            <input v-model="title" type="text" name="title" placeholder="Title">
            <input v-model="description" type="text" name="description" placeholder="Description">
            <button type="submit" value="Submit">Submit</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
    export default {
        name: "PostForm",
        data() {
            return {
                title: '',
                description: ''
            }
        },
        methods: {
            ...mapActions(['POSTS_NEW']),
            onSubmit(event) {
                event.preventDefault();
                const post = {
                    title: this.title,
                    description: this.description
                }
                // emit action
                this.POSTS_NEW(post);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>