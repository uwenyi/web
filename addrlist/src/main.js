// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import App from './App'
import router from './router'
import Index from './list_index/index'
import axios from  'axios'
import '@/assets/common.css'
import Header from './components/Header'
import List from './components/List'

Vue.prototype.$ajax=axios
Vue.component(Header.name,Header)
Vue.component(List.name,List)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Index },
  template: '<index/>'

})
