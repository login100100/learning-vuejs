import { VuexModule, Module, Mutation, Action, MutationAction, getModule } from 'vuex-module-decorators';
import axios from 'axios';
import store from '@/store';

interface Post {
    id: number;
    title: string;
    description: string;
}
interface PostParam { 
    title: string;
    description: string;
}
// dynamic modules create at runtime and needs different export
@Module({
    namespaced: true,
    name: 'posts',
    store,
    dynamic: true
})
class PostsModule extends VuexModule {
    $POSTS: Post[] = [];
    $POST?: Post;

    @Mutation
    NEW_POST(post: Post){
        this.$POSTS.push(post);
    }

    @Action({ commit: 'NEW_POST' })
    async addNew(post: PostParam) {
        const request = await axios.post('http://localhost:4000/posts', post);
        store.commit('ALERT_SUCCESS', `Status ${request.status}: ${request.statusText}`);
        return request.data
    }

    @MutationAction
    async getAllPosts() {
        const response = await axios.get('http://localhost:4000/posts');
        return {
            $POSTS: response.data
        }
    }
}
export default getModule(PostsModule);