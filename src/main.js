import Vue from 'vue';
import App from './App.vue';

import {i18n} from "@/plugins/i18n";
import store from '@/store';
import router from '@/router';
import modal from '@/plugins/modalWindow';
import context from '@/plugins/ContextMenu';
import FlagIcon from 'vue-flag-icon';
import ScrollLoader from 'vue-scroll-loader';

Vue.use(modal);
Vue.use(context);
Vue.use(FlagIcon);
Vue.use(ScrollLoader);

new Vue({
  i18n,
  render: h => h(App),
  store,
  router,
}).$mount('#app');
