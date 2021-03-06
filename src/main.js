// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.prototype.$axios = axios
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

//解决移动端点击300ms延迟
import FastClick from 'fastclick'
FastClick.attach(document.body)

import "normalize.css/normalize.css";  //初始设置css
import './assets/iconfont/iconfont.css'   //引入iconfont

//解决自适应问题
import 'lib-flexible'  



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
