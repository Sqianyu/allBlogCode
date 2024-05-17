import Vue from 'vue'
import Vuex from 'vuex'
import persistedstate from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  getters: {
  },
  mutations: {
    setUsername(state,user) {
      state.user = user
    }
  },
  actions: {
  },
  modules: {
  },
  plugins:[
    persistedstate() 
  ]
})
