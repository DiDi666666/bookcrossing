import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
  modules: {
   home
  }
})

export default store