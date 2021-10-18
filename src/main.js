import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from '@/router'
import vuetify from './plugins/vuetify'
import 'font-awesome/css/font-awesome.min.css'
import "chart.js"
import "hchs-vue-charts"

Vue.config.productionTip = false
Vue.use(window.VueCharts)

new Vue({
  store,
  router,
  vuetify,
  icons: {
    iconfont: 'fa4'
  },
  render: h => h(App)
}).$mount('#app')
