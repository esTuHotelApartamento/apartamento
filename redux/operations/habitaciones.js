import {
  reservarHabitacion,
} from "../actions/habitaciones"

import { navigate } from "gatsby"

export const reservarHabitacionOperation = dataHabitacion => {
  return (dispath, getState) => {
    let {
      habitacionesReducer: { habitacionesReservadas },
    } = getState()

    let nuevaLista = habitacionesReservadas

    nuevaLista.push({
      ...dataHabitacion,
      numberIdHabitacion: habitacionesReservadas.length,
      numberRefReserva: getRandomArbitrary(10000, 1000),
    })

    let finalList = nuevaLista.reverse()
    window.localStorage.setItem("reservas",JSON.stringify(finalList))
    dispath(reservarHabitacion(finalList))
    navigate("/perfil/")
  }
}

// const calcTotalCost = (initialDate, finalDate, costBase) =>
//   finalDate.diff(initialDate, "days") * costBase

// const diffDates = (initialDate, finalDate) =>
//   finalDate.diff(initialDate, "days")

const getRandomArbitrary = (min, max) =>
  Math.trunc(Math.random() * (max - min) + min)
