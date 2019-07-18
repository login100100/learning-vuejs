import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import PostsModule from './store/modules/Posts';
// import AlertModule from './store/modules/Alert';

Vue.use(Vuex)

// global vuex store imports
export default new Vuex.Store<any>({
  state: {
    alert: {
      status: '',
      message: ''
    },
    posts: {
      posts: [
        {
          "id": 1,
          "title": "Post 1",
          "description": "Description 1"
        },
        {
          "id": 2,
          "title": "Post 2",
          "description": "Description 2"
        },
        {
          "id": 3,
          "title": "Post 3",
          "description": "Description 3"
        },
        {
          "title": "Post 4",
          "description": "Description 4",
          "id": 4
        },
        {
          "title": "post 5",
          "description": "description 5",
          "id": 5
        }
      ],
      post: {}
    }
  },
  mutations: {
    ALERT_SUCCESS(state, message: string) {
      state.alert.status = "alert_success";
      state.alert.message = message;
    },
    ALERT_ERROR(state, message: string) {
      state.status = 'alert-error';
      state.message = message;
    },
    ALERT_CLEAR(state) {
      state.status = '';
      state.message = '';
    },
    POSTS_FETCH(state, posts: Array<any>) {
      state.posts.posts = posts;
    },
    POSTS_NEW(state, post: {}) {
      state.posts.push(post);
    }
  },
  getters: {
    ALERT_GET_STATUS(state) {
      return state.alert.status;
    },
    ALERT_GET_MESSAGE(state) {
      return state.alert.message;
    },
    POSTS_GET_ALL(state) {
      return state.posts.posts;
    }
  },
  actions: {
    async POSTS_FETCH({ commit }) {
      const response = await axios.get('http://localhost:4000/posts');
      commit('POSTS_FETCH', response.data);
      commit('ALERT_SUCCESS', `Response status ${response.status}: ${response.statusText}`);
    },
    async POSTS_NEW({ commit }, newPost) {
      const response = await axios.post('http://localhost:4000/posts', newPost);
      commit('POSTS_NEW', response.data);
      commit('ALERT_SUCCESS', `Response status ${response.status}: ${response.statusText}`);
    }
  },
  modules: {

  }
})
