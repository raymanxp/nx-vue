import Vue from 'vue'
import Router from 'vue-router'
import NxHome from '../components/Home/NxHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NxHome',
      component: NxHome
    }
  ]
})
