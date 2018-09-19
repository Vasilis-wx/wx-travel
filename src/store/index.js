import Vue from 'vue'
import Vuex from 'vuex'
// import state from './state'
// import mutations from './mutations'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    city: localStorage.city || '合肥'
  },
  actions: {
    changeCity (ctx, city) {
      ctx.commit('changeCity', city)
    }
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
      localStorage.city = city
    }
  }
})

// export default new Vuex.Store({
//   state,
//   mutations
// })
