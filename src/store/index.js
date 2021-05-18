import Vue from 'vue'
import Vuex from 'vuex'
import app from './app'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
  app
})

export default store