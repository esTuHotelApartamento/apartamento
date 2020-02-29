import * as actionsLoginRegister from "../actions/loginRegisterUser"
import { navigate } from "gatsby"
import {reservarHabitacion} from '../actions/habitaciones'


export const ChangeStateLoginOperation = isLogin => {
  return (dispatch, getState) => {
    dispatch(actionsLoginRegister.ChangeStatusIsLogin(isLogin))

    let obj = JSON.stringify(getState())
    window.localStorage.setItem("dataGuardada", obj)
  }
}

export const SaveDataLoginOperation = dataUser => {
  return (dispatch, getState) => {

    window.localStorage.setItem("isLogin", true)
    window.localStorage.setItem(
      "userData",
      JSON.stringify({ mail: dataUser.mail })
    )

    dispatch(ChangeStateLoginOperation(true))
    dispatch(actionsLoginRegister.saveDataLogin(dataUser))

    let obj = JSON.stringify(getState())
    window.localStorage.setItem("dataGuardada", obj)
  }
}

export const RegisterUserOperation = dataUser => {
  return (dispatch, getState) => {
    let {
      loginRegisterUser: { registers },
    } = getState()
    let nuevoArr = registers
    nuevoArr.push({
      mail: dataUser.mail,
      pass: dataUser.pass,
    })

    window.localStorage.setItem("isLogin", true)
    window.localStorage.setItem("newArr", JSON.stringify(nuevoArr))
    window.localStorage.setItem(
      "userData",
      JSON.stringify({ mail: dataUser.mail })
    )

    dispatch(ChangeStateLoginOperation(true))
    dispatch(SaveDataLoginOperation({ mail: dataUser.mail }))
    dispatch(actionsLoginRegister.registerUserData(nuevoArr))

    let obj = JSON.stringify(getState())
    window.localStorage.setItem("dataGuardada", obj)
  }
}

export const refreshLoginOperation = () => {
  return (dispatch, getState) => {
    let newArr = window.localStorage.getItem("newArr")
    let isLogin = window.localStorage.getItem("isLogin")
    let userdata = window.localStorage.getItem("userData")
    let reservas = window.localStorage.getItem("reservas")


    if (isLogin === "true") {
      dispatch(ChangeStateLoginOperation(true))
      dispatch(SaveDataLoginOperation(JSON.parse(userdata)))
      dispatch(actionsLoginRegister.registerUserData(JSON.parse(newArr)))
      if(reservas !== null && reservas.length > 0) dispatch(reservarHabitacion(JSON.parse(reservas)))
      return
    }
  }
}

export const cerrarSesion = () => {
  navigate("/")
  return (dispatch, getState) => {
    window.localStorage.setItem("isLogin", false)
    dispatch(SaveDataLoginOperation({ mail: "" }))
    dispatch(ChangeStateLoginOperation(false))
    dispatch(actionsLoginRegister.registerUserData([{}]))
    dispatch(reservarHabitacion([]))
  }
}
