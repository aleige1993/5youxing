import { getUserByStorage } from '../utils/storage'

const user = getUserByStorage()
const state = {
  user: user || {},
  search: '',
  tabIndex: 0,
};

export default state
