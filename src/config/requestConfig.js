/**
 * create by jobscq 2019-04-18
 * 独立于业务的 头配置, 以及超时时间, 接口数据结构, 异常处理
 */
const timeout = 30000;
const getMethodHeader = {};
const postMethodHeader = {
  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
};


const getMethodConfigs = {
  timeout,
  headers: getMethodHeader,
  method: 'get',
};

const postMethodConfigs = {
  timeout,
  headers: postMethodHeader,
  method: 'post',
};

const beforRequest = () => {

}

/**
 * @param {Object} data
 * code: String
 *  SUCC("", "0000", "成功"),
    FAIL("", "0001", "失败"),
    ERROR_PARAM("", "0002", "传入参数校验失败"),
    ILLEGAL_REQUEST("", "0003", "非法请求"),
    NOT_LOGGIN("", "0004", "未登录或登录Session过期"),
    TOKEN_IS_ILLICIT("", "0005", "TOKEN验证非法"),
    QUERY_RESULT_NULL("", "0006", "查询结果为空"),
    DATA_ERROR("", "0007", "数据异常"),
    TIMEOUT("", "1111", "网络超时"),
    SYS_ERROR("", "9999", "系统繁忙"); // 此时
 */
const resultHandler = (res = {
  code: 0,
  data: {} || [],
  message: '',
  success: true,
  count: 0, // 当data为array, 存在count
}) => {
  const { data } = res
  if (data.code === '0000') {
    return data.data;
  }
  if (data.code === '0004') {
    return '/logout'
  }
  // if( data.code === '9999') { // TODO: 后端给的, 表达没认证
  //   return
  // }
  return data.message
  // throw new Error(data.message);
  // Vue.Toast(data.message)
  // return new Promise(() => {})
};

const exceptionHandler = (exception) => {
  if (exception) {
    // Vue.Toast(exception.message)
    return '网络错误';
  }
  /* eslint consistent-return: "off" */
  return new Promise(() => {});
};

export {
  getMethodConfigs,
  postMethodConfigs,
  beforRequest,
  resultHandler,
  exceptionHandler,
};
