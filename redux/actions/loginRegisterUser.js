import * as typesLR from "../types/loginRegisterUser"

export const ChangeStatusIsLogin = value => {
  return {
    type: typesLR.USER_LOGIN_STATUS,
    value,
  }
}

export const saveDataLogin = value => {
  return {
    type: typesLR.USER_LOGIN_SAVE_DATA,
    value,
  }
}

export const registerUserData = value => {
  return {
    type: typesLR.USER_REGISTER_SAVE_DATA,
    value,
  }
}
