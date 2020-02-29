const moment = require("moment")

const listaHabitaciones = () => {
  let habitaciones = []
  for (let index = 1; index <= 40; index++) {
    let habitacion = {}
    habitacion.numberId = index
    habitacion.type = "Individual"
    habitacion.cost = 35.99
    if (index >= 25) {
      habitacion.type = "Doble"
      habitacion.cost = 65.99
    }
    if (index >= 35) {
      habitacion.type = "Triple"
      habitacion.cost = 108.99
    }
    habitaciones.push(habitacion)
  }
  console.log(habitaciones)
}
listaHabitaciones()


// let date1 = moment("2020/02/28")
// let date2 = moment("2020/03/08")
// // console.log(date2.diff(date1, "hours"))
// let date11 = new Date("2020/02/28").getTime()
// let date22 = new Date("2020/03/08").getTime()
// let diff = date22 - date11
// // console.log(diff /(1000*60*60))

