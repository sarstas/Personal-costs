import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from '@/router'
import vuetify from './plugins/vuetify'
import "chart.js"
import "hchs-vue-charts"

Vue.config.productionTip = false
Vue.use(window.VueCharts)

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
