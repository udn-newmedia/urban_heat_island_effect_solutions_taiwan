import Vue from 'vue'
import VueMq from 'vue-mq'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

//Vue.prototype.$appName = 'My App'

Vue.use(VueMq, {
  breakpoints: { 
    xs: 320,
    s: 520,
    m: 767,
    l: 1023,
    xl: Infinity 
  },
  defaultBreakpoint: 's' // customize this for SSR
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
