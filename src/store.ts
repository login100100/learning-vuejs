import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import { Action, Mutation } from 'vuex-module-decorators';
import AlertModule from '@/store/modules/Alert.module';

Vue.use(Vuex)

// global vuex store imports
export default new Vuex.Store<any>({
  state: {
  },
  mutations: {
  },
  getters: {
    // ALERT_GET_STATUS(state) {
    //   return state.alert.status;
    // },
    // ALERT_GET_MESSAGE(state) {
    //   return state.alert.message;
    // },
    // POSTS_GET_ALL(state) {
    //   return state.posts.posts;
    // }
  },
  actions: {
  },
  modules: {
    AlertModule
  }
})
