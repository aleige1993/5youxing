
import { loginByPwd, loginBySms } from '../config/api'
import * as types from './mutationsType';

const actions = {
  async loginByPwd({ commit }, data) {
    const user = await loginByPwd(data)
    commit(types.SET_USER, user);
    commit(types.SAVE_USER)
    // 登录后初始化
    commit(types.SET_TABINDEX, 0)
    return user
  },
  async loginBySms({ commit }, data) {
    const user = await loginBySms(data)
    commit(types.SET_USER, user);
    commit(types.SAVE_USER)
    // 登录后初始化
    commit(types.SET_TABINDEX, 0)
    return user
  },

  setTabIndex({ commit }, index) {
    commit(types.SET_TABINDEX, index)
  },
  setUserState({ commit }) {
    commit(types.SET_USERSTATUS, '0')
    commit(types.SAVE_USER)
  },
}

export default actions
