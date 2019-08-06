import Vue from 'vue'
import Vuex from 'vuex'
import AlertModule from '@/store/modules/Alert.module';

Vue.use(Vuex)

// global vuex store imports
export default new Vuex.Store<any>({
  state: {
  },
  mutations: {
  },
  getters: {
  },
  actions: {
  },
  modules: {
    AlertModule
  }
})
