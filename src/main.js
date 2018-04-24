// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/style/common.css'
import './assets/highlight-style/solarized-light.css'
import "./assets/icon/iconfont.css"


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,

  components: { App },
  template: '<App/>'
})
