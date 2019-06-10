import Vue from 'vue';
import './plugins/index'
import 'amfe-flexible';
import App from './App.vue';
import router from './router.old';
import store from './store/index';
import * as Tools from './utils/tool';

Vue.config.productionTip = false;

Vue.prototype.$Tools = Tools;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
