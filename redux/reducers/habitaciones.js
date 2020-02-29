import * as typesHabitaciones from "../types/habitaciones"

const initialState = {
  habitacionData: {
    habitacionIndividual: {
      type: "Individual",
      img: "/habitaciones/habitaciones-simples-individuales/hsi2-cama.JPG",
      descBreve:
        "Wifi gratuito, aire acondicionado, escritorio, baño con ducha ...",
      precioUnaNoche: 35,
    },
    habitacionDoble: {
      type: "Doble",
      img: "/habitaciones/habitaciones-simple-matrimonial/hsm3-cama.JPG",
      descBreve:
        "Wifi gratuito, aire acondicionado, escritorio, baño con ducha ...",
      precioUnaNoche: 65,
    },
    habitacionTriple: {
      type: "Triple",
      img: "/habitaciones/habitaciones-suit/hs2.jpg",
      descBreve:
        "Wifi gratuito, aire acondicionado, escritorio, baño con ducha ...",
      precioUnaNoche: 108,
    },
  },
  habitacionesReservadas: [],
  habitacionesBusquedaOfertas: [],
  habitaciones: [
    { numberId: 1, type: "Individual", cost: 35.99 },
    { numberId: 2, type: "Individual", cost: 35.99 },
    { numberId: 3, type: "Individual", cost: 35.99 },
    { numberId: 4, type: "Individual", cost: 35.99 },
    { numberId: 5, type: "Individual", cost: 35.99 },
    { numberId: 6, type: "Individual", cost: 35.99 },
    { numberId: 7, type: "Individual", cost: 35.99 },
    { numberId: 8, type: "Individual", cost: 35.99 },
    { numberId: 9, type: "Individual", cost: 35.99 },
    { numberId: 10, type: "Individual", cost: 35.99 },
    { numberId: 11, type: "Individual", cost: 35.99 },
    { numberId: 12, type: "Individual", cost: 35.99 },
    { numberId: 13, type: "Individual", cost: 35.99 },
    { numberId: 14, type: "Individual", cost: 35.99 },
    { numberId: 15, type: "Individual", cost: 35.99 },
    { numberId: 16, type: "Individual", cost: 35.99 },
    { numberId: 17, type: "Individual", cost: 35.99 },
    { numberId: 18, type: "Individual", cost: 35.99 },
    { numberId: 19, type: "Individual", cost: 35.99 },
    { numberId: 20, type: "Individual", cost: 35.99 },
    { numberId: 21, type: "Individual", cost: 35.99 },
    { numberId: 22, type: "Individual", cost: 35.99 },
    { numberId: 23, type: "Individual", cost: 35.99 },
    { numberId: 24, type: "Individual", cost: 35.99 },
    { numberId: 25, type: "Doble", cost: 65.99 },
    { numberId: 26, type: "Doble", cost: 65.99 },
    { numberId: 27, type: "Doble", cost: 65.99 },
    { numberId: 28, type: "Doble", cost: 65.99 },
    { numberId: 29, type: "Doble", cost: 65.99 },
    { numberId: 30, type: "Doble", cost: 65.99 },
    { numberId: 31, type: "Doble", cost: 65.99 },
    { numberId: 32, type: "Doble", cost: 65.99 },
    { numberId: 33, type: "Doble", cost: 65.99 },
    { numberId: 34, type: "Doble", cost: 65.99 },
    { numberId: 35, type: "Triple", cost: 108.99 },
    { numberId: 36, type: "Triple", cost: 108.99 },
    { numberId: 37, type: "Triple", cost: 108.99 },
    { numberId: 38, type: "Triple", cost: 108.99 },
    { numberId: 39, type: "Triple", cost: 108.99 },
    { numberId: 40, type: "Triple", cost: 108.99 },
  ],
}

export function habitacionesReducer(state = initialState, action) {
  switch (action.type) {
    case typesHabitaciones.RESERVAR_HABITACION:
      return { ...state, habitacionesReservadas: action.value }
    case typesHabitaciones.CREAR_LISTA_RESULTADO_BUSQUEDA_HABITACIONES:
      return { ...state, habitacionesBusquedaOfertas: action.value }
    default:
      return state
  }
}

// export default habitacionesReducer
