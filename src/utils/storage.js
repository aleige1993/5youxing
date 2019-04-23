const storage = window.sessionStorage
const mainKey = 'youx5'
const userKey = 'youx5User'
const token = 'youx5Token'


export function saveAllToStorage(val) {
  storage.setItem(mainKey, val)
}

export function saveToStorage(key, val) {
  storage.setItem(key, (typeof val).toLowerCase() === 'object' ? JSON.stringify(val) : val)
}

function saveToken(val) {
  saveToStorage(token, val)
}

export function getToken() {
  return storage.getItem(token)
}

export function getAllToStorage() {
  const res = storage.getItem(mainKey)
  try {
    if (res) {
      return JSON.parse(res)
    }
    return {}
  } catch {
    return {}
  }
}

export function getToStorage(key) {
  const res = storage.getItem(key)
  try {
    if (res) {
      return JSON.parse(res)
    }
    return {}
  } catch {
    return {}
  }
}

export function clearStorage() {
  storage.clear()
}

export function getUserByStorage() {
  return getToStorage(userKey) || null
}

export function saveUserByStorage(val) {
  saveToStorage(userKey, val)
  if (val.token) {
    saveToken(val.token)
  }
}

export function delUserByStorage() {
  clearStorage()
}

export function removeStorage(key) {
  storage.removeItem(key)
}
