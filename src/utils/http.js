/**
 * 通用的axios请求封装,
 * 独立于项目的配置来源于 config/index.js
 */

import axios from 'axios';
import qs from 'qs';
import { getToken } from './storage'

import {
  getMethodConfigs,
  postMethodConfigs,
  beforRequest,
  resultHandler,
  exceptionHandler,
} from '../config/requestConfig';

// axios 全部配置项, 含nodejs
const configsFull = {
  // `url` is the server URL that will be used for the request
  url: '',

  // `method` is the request method to be used when making the request
  method: 'get', // default

  // `baseURL` will be prepended to `url` unless `url` is absolute.
  // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
  // to methods of that instance.
  baseURL: '',

  // `transformRequest` allows changes to the request data before it is sent to the server
  // This is only applicable for request methods 'PUT', 'POST', and 'PATCH'
  // The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
  // FormData or Stream
  // You may modify the headers object.
  // transformRequest: [function (data, headers) {
  //   // Do whatever you want to transform the data

  //   return data;
  // }],

  // `transformResponse` allows changes to the response data to be made before
  // it is passed to then/catch
  // transformResponse: [function (data) {
  //   // Do whatever you want to transform the data

  //   return data;
  // }],

  // `headers` are custom headers to be sent
  headers: {},

  // `params` are the URL parameters to be sent with the request
  // Must be a plain object or a URLSearchParams object
  // params: {},

  // `paramsSerializer` is an optional function in charge of serializing `params`
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  // paramsSerializer(params) {
  //   return Qs.stringify(params, { arrayFormat: 'brackets' });
  // },

  // `data` is the data to be sent as the request body
  // Only applicable for request methods 'PUT', 'POST', and 'PATCH'
  // When no `transformRequest` is set, must be of one of the following types:
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - Browser only: FormData, File, Blob
  // - Node only: Stream, Buffer
  // data: {},

  // `timeout` specifies the number of milliseconds before the request times out.
  // If the request takes longer than `timeout`, the request will be aborted.
  timeout: 30000, // default is `0` (no timeout)

  // `withCredentials` indicates whether or not cross-site Access-Control requests
  // should be made using credentials
  withCredentials: true, // default

  // `adapter` allows custom handling of requests which makes testing easier.
  // Return a promise and supply a valid response (see lib/adapters/README.md).
  // adapter(config) {
  //   /* ... */
  // },

  // `auth` indicates that HTTP Basic auth should be used, and supplies credentials.
  // This will set an `Authorization` header, overwriting any existing
  // `Authorization` custom headers you have set using `headers`.
  // auth: {
  //   username: 'janedoe',
  //   password: 's00pers3cret',
  // },

  // `responseType` indicates the type of data that the server will respond with
  // options are 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json', // default

  // `responseEncoding` indicates encoding to use for decoding responses
  // Note: Ignored for `responseType` of 'stream' or client-side requests
  responseEncoding: 'utf8', // default

  // `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
  // xsrfCookieName: 'XSRF-TOKEN', // default

  // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
  // xsrfHeaderName: 'X-XSRF-TOKEN', // default

  // `onUploadProgress` allows handling of progress events for uploads
  // onUploadProgress(progressEvent) {
  //   // Do whatever you want with the native progress event
  // },

  // `onDownloadProgress` allows handling of progress events for downloads
  // onDownloadProgress(progressEvent) {
  //   // Do whatever you want with the native progress event
  // },

  // `maxContentLength` defines the max size of the http response content in bytes allowed
  // maxContentLength: 2000,

  // `validateStatus` defines whether to resolve or reject the promise for a given
  // HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
  // or `undefined`), the promise will be resolved; otherwise, the promise will be
  // rejected.
  validateStatus(status) {
    return status >= 200 && status < 300; // default
  },

  // `maxRedirects` defines the maximum number of redirects to follow in node.js.
  // If set to 0, no redirects will be followed.
  // maxRedirects: 5, // default

  // `socketPath` defines a UNIX Socket to be used in node.js.
  // e.g. '/var/run/docker.sock' to send requests to the docker daemon.
  // Only either `socketPath` or `proxy` can be specified.
  // If both are specified, `socketPath` is used.
  // socketPath: null, // default

  // `httpAgent` and `httpsAgent` define a custom agent to be used when performing http
  // and https requests, respectively, in node.js. This allows options to be added like
  // `keepAlive` that are not enabled by default.
  // httpAgent: new http.Agent({ keepAlive: true }),
  // httpsAgent: new https.Agent({ keepAlive: true }),

  // 'proxy' defines the hostname and port of the proxy server.
  // You can also define your proxy using the conventional `http_proxy` and
  // `https_proxy` environment variables. If you are using environment variables
  // for your proxy configuration, you can also define a `no_proxy` environment
  // variable as a comma-separated list of domains that should not be proxied.
  // Use `false` to disable proxies, ignoring environment variables.
  // `auth` indicates that HTTP Basic auth should be used to connect to the proxy, and
  // supplies credentials.
  // This will set an `Proxy-Authorization` header, overwriting any existing
  // `Proxy-Authorization` custom headers you have set using `headers`.
  // proxy: {
  //   host: '127.0.0.1',
  //   port: 9000,
  //   auth: {
  //     username: 'mikeymike',
  //     password: 'rapunz3l',
  //   },
  // },

  // `cancelToken` specifies a cancel token that can be used to cancel the request
  // (see Cancellation section below for details)
  // cancelToken: new CancelToken(((cancel) => {
  // })),
};

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// application/json;charset=UTF-8
// multipart/form-data
// application/x-www-form-urlencoded
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

const getConfigs = {
  ...configsFull,
  ...getMethodConfigs,
  params: {},
};

const postConfigs = {
  ...configsFull,
  ...postMethodConfigs,
  data: {},
  transformRequest: [function (data) {
    const res = qs.stringify(data)
    return res;
  }],
};

// const instanceGet = axios.create(getConfigs);

// const instancePost = axios.create(postConfigs);

// 默认给实例 post 的配置
// const instance = axios.create({
//   ...configsFull,
//   ...postConfigs,
// });

// Add a request interceptor
axios.interceptors.request.use((config) => {
  beforRequest()
  const token = getToken()
  const header = config.headers
  return {
    ...config,
    headers: {
      ...header,
      token,
    },
  }
}, error => Promise.reject(error));

// Add a response interceptor
axios.interceptors.response.use(
  response => resultHandler(response),
  error => Promise.reject(error),
);

// 组装实例
const getData = (url, params) => (
  axios({
    ...getConfigs,
    url,
    params,
  }).then(
    data => data,
    error => exceptionHandler(error),
  )
);
const postData = (url, data) => (
  axios({
    ...postConfigs,
    url,
    data,
  }).then(
    res => res,
    error => exceptionHandler(error),
  )
);
const axios$ = (url, data, option) => axios({
  url,
  data,
  ...option,
});

// TODO: 批量接口
// const axiosAll = () => axios.all

export {
  getData,
  postData,
  axios$,
  axios, // 原始的
};
