<template>
    <div>
        <PostForm/>
        <Posts/>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import PostForm from '@/components/PostForm.vue'
import Posts from '@/components/Posts.vue'

@Component({
    components: {
        PostForm,
        Posts
    }
})
export default class PostsPage extends Vue {
}
</script>