import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/Main'
import Articl from '../views/Articl'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      name:'main',
      component:Main
    } ,
    {
      path:"/articl/:id",
      name:'articl',
      component:Articl
    }

  ]
})
