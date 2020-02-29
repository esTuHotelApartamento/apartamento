import * as typesLR from "../types/loginRegisterUser"

let loginRegisterUserInitial = {
  isLogin: false,
  userLogin: {
    mail: "",
    name: "",
  },
  registers: [
    {
      mail: "",
      pass: "",
    },
  ],
}

export function loginRegisterUser(state = loginRegisterUserInitial, action) {
  switch (action.type) {
    case typesLR.USER_LOGIN_STATUS:
      return { ...state, isLogin: action.value }
    case typesLR.USER_LOGIN_SAVE_DATA:
      return { ...state, userLogin: action.value }
    case typesLR.USER_REGISTER_SAVE_DATA:
      return { ...state, registers: action.value }
    default:
      return state
  }
}
// export default loginRegisterUser
