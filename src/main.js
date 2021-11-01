import Vue from 'vue'
import App from './App.vue'

import {i18n} from "@/plugins/i18n";
import store from '@/store'
import router from '@/router'
import modal from '@/plugins/modalWindow'
import context from '@/plugins/ContextMenu'
import FlagIcon from 'vue-flag-icon'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faHatWizard)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(modal)
Vue.use(context)
Vue.use(FlagIcon)

new Vue({
  i18n,
  render: h => h(App),
  store,
  router,
}).$mount('#app')
