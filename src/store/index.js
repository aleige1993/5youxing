import Vue from 'vue'
import Vuex from 'vuex'
import creatLogger from 'vuex/dist/logger'

import actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import state from './state'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  plugins: debug ? [creatLogger({
    collapsed: false, // 自动展开记录的 mutation
    filter() { // 参数: mutation, stateBefore, stateAfter
      // 若 mutation 需要被记录，就让它返回 true 即可
      // 顺便，`mutation` 是个 { type, payload } 对象
      return true
    },
    transformer(state1) {
      // 在开始记录之前转换状态
      // 例如，只返回指定的子树
      return state1.subTree
    },
    mutationTransformer(mutation) {
      // mutation 按照 { type, payload } 格式记录
      // 我们可以按任意方式格式化
      return mutation.type
    },
    logger: console, // 自定义 console 实现，默认为 `console`
  })] : [],
})
