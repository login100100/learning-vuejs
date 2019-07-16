import Vue from 'vue'
import Vuex from 'vuex'
import PostsModule from './store/modules/Posts';
import AlertModule from './store/modules/Alert';

Vue.use(Vuex)

// global vuex store imports
export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    PostsModule,
    AlertModule
  }
})
