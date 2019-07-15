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
    export default {
        name: "PostForm",
        data() {
            return {
                title: '',
                description: ''
            }
        },
        methods: {
            onSubmit(event) {
                event.preventDefault();
                const post = {
                    title: this.title,
                    description: this.description
                }
                // emit event to view above
                this.$emit('add-post', post);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>