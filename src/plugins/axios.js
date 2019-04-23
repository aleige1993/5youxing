import {
  getData,
  postData,
  axios$,
} from '../utils/http';

const AxiosPlugin = (Vue) => {
  Vue.axios$ = axios$;
  window.axios = axios$;
  Object.defineProperties(Vue.prototype, {
    $axios: {
      get() {
        return axios$;
      },
    },
    $getData: {
      get() {
        return getData;
      },
    },
    $postData: {
      get() {
        return postData;
      },
    },
  });
};

export default AxiosPlugin;
