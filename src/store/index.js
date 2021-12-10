import Vue from 'vue'
import Vuex from 'vuex'
import data from './data'
import admin from '@/app/Admin/modules/'
 
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    ...admin,data
     
  }
})
