import * as types from './mutationsType';
import { saveAllToStorage, saveUserByStorage, delUserByStorage } from '../utils/storage'

const mutations = {
  [types.SET_USER](state, user) {
    if (!user) {
      state.user = null;
      delUserByStorage()
      return;
    }
    state.user = { ...state.user, ...user };
  },
  [types.SET_SEARCH](state, search) {
    state.search = search;
  },
  [types.SAVE_STATE](state) {
    saveAllToStorage(state)
  },
  [types.SAVE_USER](state) {
    saveUserByStorage(state.user || {})
  },
  [types.SET_TABINDEX](state, index) {
    state.tabIndex = index
  },
  [types.SET_USERSTATUS](state, status) {
    state.user = {
      ...state.user,
      authStatus: status,
    }
  },
};

export default mutations;
