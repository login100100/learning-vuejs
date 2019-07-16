import * as ACTIONS from '../actions/types';
import axios from "axios";

const state = {
    posts: [],
    post: {} // single post to add on list
};

const getters = {
    getAllPosts: (state) => state.posts
};

const actions = {
    async fetchPosts({ commit }) {
        const response = await axios.get('http://localhost:4000/posts');
        // commit a mutation on state with data gathered from json server
        commit(ACTIONS.POSTS.FETCH_POSTS, response.data)
    },
    async addPost({ commit }, post) {
        const response = await axios.post('http://localhost:4000/posts', post);
        // consider this as sending an action to mutator/reducer, it takes type and payload
        commit(ACTIONS.POSTS.NEW_POST, response.data);
    }
};

const mutations = { // mutations modify state and are invoked by actions, similar to redux reducers
    [ACTIONS.POSTS.FETCH_POSTS]: (state, posts) => {
        state.posts = posts
    },
    [ACTIONS.POSTS.NEW_POST]: (state, post) => {
        state.posts.push(post);
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}