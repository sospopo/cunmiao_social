const emailReg = /^[A-Za-z0-9][\w\._]*[a-zA-Z0-9]+@[A-Za-z0-9.-]+\.([A-Za-z]{2,4})$/;
const phoneReg = /^1[3|4|5|7|8][0-9]{9}$/;

// TODO: Unexpected token: name (status) [./config/loginConfirmFunc.js:5,0][static/js/app.e185c987e6499ef05de6.js:68375,6]

export const isEmail = function (username) {
  let status = emailReg.test(username);
  let msg;
  if (status) {
    msg = ''
  } else {
    msg = '请输入正确的邮箱'
  }
  return {status: status, msg: msg}
};

export const isPhone = function (username) {
  let status = phoneReg.test(username);
  let msg;
  if (status) {
    msg = ''
  }else {
    msg = '请输入正确的手机号'
  }
  return {status: status, msg: msg}
};

export const isBoth = function (username) {
  let status = isEmail(username).status||isPhone(username).status;
  let msg;
  if (status) {
    msg = ''
  }else {
    msg = '请输入正确的邮箱或手机号'
  }
  return {status: status, msg: msg}
};

export const isString = function (username) {
  let status = Boolean(username);
  let msg;
  if (status) {
    msg = ''
  } else {
    msg = '请输入正确的账号'
  }
  return {status: status, msg: msg}
}
