function isIOS() {
  const agent = window.navigator.userAgent.toLowerCase();
  return /(iPhone|iPad|iPod|iOS)/i.test(agent)
}

function Timespan(time) {
  const date = (typeof time === 'number' || typeof time === 'string') ? new Date(time) : time
  const Y = date.getFullYear();
  const M = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : (date.getMonth() + 1);
  const D = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const h = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const m = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const s = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
  return {
    value: `${Y}-${M}-${D} ${h}:${m}:${s}`,
    Y,
    M,
    D,
    h,
    m,
    s,
  }
}
/**
   * 时间戳转时间
   * @returns {string}
   */
function timestampToTime(timestamp, fix) {
  const date = new Date(timestamp);
  const Y = date.getFullYear();
  const M = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : (date.getMonth() + 1);
  const D = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const h = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const m = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const s = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
  if (fix === 'h') {
    return `${Y}-${M}-${D} ${h}:00:00`;
  }
  if (fix === 'd') {
    return `${Y}-${M}-${D}`;
  }
  if (fix === 'm') {
    return `${Y}-${M}-${D} ${h}:${m}:00`;
  }
  if (fix === 'M') {
    return `${Y}-${M}`;
  }
  const time = `${Y}-${M}-${D} ${h}:${m}:${s}`
  return time // isIOS() ? time.replace(/-/g, '/') : time;
}

function timeToHour(time) {
  const {
    Y,
    M,
    D,
    h,
    m,
    s,
  } = Timespan(time)
  let hour = h
  if (m > 0 || s > 0) {
    hour = hour < 10 ? `0${hour}` : hour
  }
  const res = `${Y}-${M}-${D} ${hour}:00:00`;
  return res // isIOS() ? res.replace(/-/g, '/') : res;
}

/**
* 时间戳转时间
* @returns {string}
*/
function formatTimeCompatibleIos(time) {
  return isIOS() ? time.replace(/-/g, '/') : time;
}

/**
   * layerOpen
   * @returns {string}
   */
function layerOpen(msg = '') {
  layer.open({
    content: msg,
    skin: 'msg',
    time: 3, // 3秒后自动关闭
    tips: [2],
  });
}

/**
   * 字符串后四位加*号
   * @returns {string}
   */
function stringAddStar(string, index = 3, replacelength = 4) {
  return `${string.substring(0, index)}****${string.substring(index + replacelength, string.length)}`;
}

export {
  stringAddStar,
  layerOpen,
  formatTimeCompatibleIos,
  timestampToTime,
  timeToHour,
  isIOS,
}
