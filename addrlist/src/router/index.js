import Vue from 'vue'
import Router from 'vue-router'
import ListIndex from '@/list_index/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListIndex',
      component: ListIndex
    }
  ]
})
