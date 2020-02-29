
export let habitaciones = []
for (let index = 1; index <= 40; index++) {
  if( index <= 25 ){
    let habitacion = {
      numero: index,
      tipo: "simple",
      img: "/habitaciones/habitaciones-simples-individuales/hsi2-cama.JPG",
      disponible: true, 
      descBreve: "Wifi gratuito, aire acondicionado, escritorio, baño con ducha ...",
      precioUnaNoche: 19,
    };
    habitaciones.push(habitacion);  
  }else if (index <= 35){
    let habitacion = {
      numero: index,
      tipo: "matrimonial",
      img: "/habitaciones/habitaciones-simples-individuales/hsi2-cama.JPG",
      disponible: true,
      descBreve: "Wifi gratuito, aire acondicionado, escritorio, baño con ducha ...",
      precioUnaNoche: 29,
    };
    habitaciones.push(habitacion);
  }else if(index <= 40) {
      let habitacion = {
        numero: index,
        tipo: "suit",
        img: "/habitaciones/habitaciones-simples-individuales/hsi2-cama.JPG",
        disponible: true, 
        descBreve: "Wifi gratuito, aire acondicionado, escritorio, baño con ducha ...",
        precioUnaNoche: 39,
      };
      habitaciones.push(habitacion);
  }

}


export let hotelData = {
  habitaciones,
  dataHabitaciones: {
    cantidad: 40,
    libres: 0,
    usadas: 0,
    simples: {
      cantidad: 10,
      libres: 0,
      usadas: 0,
    },
    matrimoniales: {
      cantidad: 10,
      libres: 0,
      usadas: 0,
    },
    suit: {
      cantidad: 5,
      libres: 0,
      usadas: 0,
    },
  },

  servicios: {
    spa: {
      precio: "12$",
      disponible: true,
      horario: "8h - 22h"
    },
    Gimnasio: {
      precio: "5$",
      disponible: true,
      horario: "8h - 21h"
    },
    Estacionamiento: {
      precio: "Gratis",
      disponible: true,
      horario: "8h - 22h"
    },
  }
}




class Hotel {

  constructor(
    contidadHabitaciones,
    habitaciones
  ) {


  }
}


/**
 * @class Habitacion
 * @constructor (
 *      @param number numeroDeHabitacionId
 *      @param number cantidadCamas,
 *      @param number cantidadBaños,
 *      @param string tipoDeHabitacion,
 *      @param bool conHuesped,
 *      @param Huespedes ObjHuespedes
 * )
 */
class Habitacion {

  constructor(
    numeroDeHabitacionId,
    cantidadCamas,
    cantidadBaños,
    tipoDeHabitacion,

    conHuesped,
    ObjHuespedes,
  ) {
    this.numeroDeHabitacionId = numeroDeHabitacionId;
    this.cantidadCamas = cantidadCamas;
    this.cantidadBaños = cantidadBaños;
    this.tipoDeHabitacion = tipoDeHabitacion;
    this.conHuesped = conHuesped;
    this.ObjHuespedes = ObjHuespedes;
  }
}


class Huespedes {
  constructor(
    numeroDeHabitacionId,
    cantidadAdultos,
    cantidadNiños,
    servicios,
  ) {

    this.numeroDeHabitacionId = numeroDeHabitacionId;
    this.cantidadAdultos = cantidadAdultos;
    this.cantidadNiños = cantidadNiños;
    this.servicios = servicios;
  }
}






// 
// 
//      Habitacion             1->n      Huespedes
//  // numeroDeHabitacionId,    -> numeroDeHabitacionId,
    // cantidadCamas,           // cantidadAdultos
    // cantidadBaños,           // cantidadNiños
    // tipoDeHabitacion,        //
    // conHuesped,              //
    // ObjHuespedes,            //
// // // 
// // // 
// 
// 
// 
// 