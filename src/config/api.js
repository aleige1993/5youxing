/**
 * create by jobscq 2019-04-18
 * 业务接口
 */
import { postData } from '../utils/http'

/**
 * 登录
 * @param {Object} user
 */
export function loginByPwd(user = { mobile: '', password: '' }) {
  return postData('user/login', user)
}

export function loginBySms(user = { mobile: '', verifyCode: '' }) {
  return postData('user/smslogin', user)
}

/**
 * 注销
 */
export function logout() {
  return postData('user/logout')
}
