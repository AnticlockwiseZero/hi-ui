import Vue from 'vue'
import App from './App.vue'
import HiUi from '../packages'

Vue.config.productionTip = false
Vue.use(HiUi)

new Vue({
  render: h => h(App)
}).$mount('#app')
