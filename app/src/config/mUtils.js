export const setItem = function (key, content) {
  let _content
  if (typeof content !== 'string') {
    _content = JSON.stringify(content)
  } else {
    _content = content
  }
  sessionStorage.setItem(key, _content)
}

export const getItem = function (key) {
  return sessionStorage.getItem(key)
}

export const removeItem = function (key) {
  sessionStorage.removeItem(key)
}
