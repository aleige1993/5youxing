import Vue from 'vue';
import './plugins/index'
// import 'amfe-flexible';
import App from './App.vue';
import router from './router';
import store from './store/index';
import * as Tools from './utils/tool';

Vue.config.productionTip = false;

Vue.filter('dateFormate', (value, format) => {
  let currDate = value
  if (typeof currDate === 'string' || typeof currDate === 'number') {
    currDate = new Date(currDate)
  }
  let str = format;
  const Week = ['日', '一', '二', '三', '四', '五', '六'];

  str = str.replace(/yyyy|YYYY/, currDate.getFullYear());
  str = str.replace(/yy|YY/, (currDate.getYear() % 100) > 9 ? (currDate.getYear() % 100).toString() : `0${currDate.getYear() % 100}`);

  str = str.replace(/MM/, currDate.getMonth() > 8 ? (currDate.getMonth() + 1).toString() : `0${currDate.getMonth() + 1}`);
  str = str.replace(/M/g, currDate.getMonth() + 1);

  str = str.replace(/w|W/g, Week[currDate.getDay()]);

  str = str.replace(/dd|DD/, currDate.getDate() > 9 ? currDate.getDate().toString() : `0${currDate.getDate()}`);
  str = str.replace(/d|D/g, currDate.getDate());

  str = str.replace(/hh|HH/, currDate.getHours() > 9 ? currDate.getHours().toString() : `0${currDate.getHours()}`);
  str = str.replace(/h|H/g, currDate.getHours());
  str = str.replace(/mm/, currDate.getMinutes() > 9 ? currDate.getMinutes().toString() : `0${currDate.getMinutes()}`);
  str = str.replace(/m/g, currDate.getMinutes());

  str = str.replace(/ss|SS/, currDate.getSeconds() > 9 ? currDate.getSeconds().toString() : `0${currDate.getSeconds()}`);
  str = str.replace(/s|S/g, currDate.getSeconds());

  const agent = window.navigator.userAgent.toLowerCase();
  const isIos = agent.indexOf('iphone') > -1

  return isIos ? str.replace(/-/g, '/') : str;
})

Vue.prototype.$Tools = Tools;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
