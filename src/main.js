// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../node_modules/@clr/icons/clr-icons.min.css'
import '../node_modules/@webcomponents/custom-elements/custom-elements.min.js'
import '../node_modules/@clr/icons/clr-icons.min.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
