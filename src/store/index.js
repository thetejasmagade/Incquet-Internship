import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false
  },
  getters: {
  },
  mutations: {
    changeLoginFunc(state){
      state.isLoggedIn = true;
    }
  },
  actions: {
  },
  modules: {
  }
})
