import Vue from 'vue'
import Vuex from 'vuex'
import modules from './store/index'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: modules,
  state: {},
  mutations: {},
  actions: {},
})
