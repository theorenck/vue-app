import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
import {RECEIVE_DATA} from './mutations'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

let store = new Vuex.Store({
  state: {
    data: []
  },
  mutations: {
    [RECEIVE_DATA] (state, { data }) {
      state.data = [...state.data, data]
    }
  },
  actions: {
    fetchData ({ commit }, data) {
      commit(RECEIVE_DATA, { data })
    }
  },
  getters: {
    data: state => state.data
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

export default store
