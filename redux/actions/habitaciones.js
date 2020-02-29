import * as typesHabitaciones from "../types/habitaciones"

export const reservarHabitacion = value => ({
  type: typesHabitaciones.RESERVAR_HABITACION,
  value,
})

export const crearListaResultadoBusqueda = value => ({
  type: typesHabitaciones.CREAR_LISTA_RESULTADO_BUSQUEDA_HABITACIONES,
  value,
})
