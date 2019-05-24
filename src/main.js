import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

//Vue.prototype.$appName = 'My App'

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
