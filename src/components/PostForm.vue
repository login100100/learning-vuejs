<template>
    <div class="container">
        <form @submit="onSubmit($event)">
            <input v-model="title" type="text" name="title" placeholder="Title">
            <input v-model="description" type="text" name="description" placeholder="Description">
            <button type="submit" value="Submit">Submit</button>
        </form>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Posts from '@/store/modules/Posts.module';
import { mapActions } from 'vuex';

@Component
export default class PostForm extends Vue {
    title: string = '';
    description: string = '';

    onSubmit(event: any) {
        event.preventDefault();
        const post = {
            title: this.title,
            description: this.description
        }
        Posts.addNew(post);
    }
}
</script>

<style lang="scss" scoped>

</style>