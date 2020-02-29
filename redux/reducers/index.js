import { combineReducers } from "redux"
import {loginRegisterUser} from "./loginRegisterUser"
import {habitacionesReducer} from "./habitaciones"

export default combineReducers({
  loginRegisterUser,
  habitacionesReducer
})
