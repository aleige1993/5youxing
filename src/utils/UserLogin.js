/**
 * Created by MarvenGong on 2017/11/10.
 */
class UserLogin {
  LOGININFOKEY='loginInfo';

  /**
   * 判断是否登录
   * @returns {boolean}
   */
  isLogin() {
    const localLoginInfo = window.localStorage.getItem(this.LOGININFOKEY);
    if (typeof (localLoginInfo) !== 'undefined' && localLoginInfo !== '' && localLoginInfo !== null) {
      return true;
    }
    return false;
  }

  /**
   * 获取登录信息
   * @returns {{}}
   */
  getLoginInfo() {
    if (this.isLogin()) {
      return JSON.parse(localStorage.getItem(this.LOGININFOKEY));
    }
    return {};
  }

  /**
   * 获取token
   * @returns {token}
   */
  getLoginToken() {
    return this.getLoginInfo();
  }

  /**
   * 存储登录信息
   * @param loginInfo
   * @returns {{}}
   */
  setLoginInfo(loginInfo) {
    localStorage.setItem(this.LOGININFOKEY, JSON.stringify(loginInfo));
    return this.getLoginInfo();
  }

  /**
   * 清空登录信息
   */
  removeLoginInfo() {
    localStorage.removeItem(this.LOGININFOKEY);
  }
}
export default new UserLogin();
