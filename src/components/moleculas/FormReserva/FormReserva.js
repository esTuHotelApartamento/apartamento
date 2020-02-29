import React, { useState, useEffect } from "react"

import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

import { connect } from "react-redux"

import "react-dates/initialize"
import "react-dates/lib/css/_datepicker.css"
import "./dataRangerPicker.css"
import { DateRangePicker } from "react-dates"
import esLocale from "moment/locale/es"
import moment from "moment"

import {reservarHabitacionOperation} from '../../../../redux/operations/habitaciones'


import styled from "styled-components"

const FormContainer = styled.form`
  padding: 24px 26px;
  width: fit-content;
  height: fit-content;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  border-radius: 12px;

  @media (max-width: 750px) {
    height: 500px;
  }
`
const ItemForm = styled.label`
  margin: ${({ margin }) => (margin ? margin : "0px")};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "space-between"};
`

const ButtomFormSubmit = styled.input`
  appearance: none;
  border: none;
  font-weight: 900;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.emphasis};
  font-size: 18px;
  width: 52%;
  outline: none;
  cursor: pointer;
  @media (max-width: 400px) {
    width: 100%;
  }
`

const ErrorMsj = styled.div`
  color: red;
  font-size: 10px;
`
// Input suma y resta de huespedes
const InputContContainer = styled.div`
  width: fit-content;
  padding: 12px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const BtnCont = styled.div`
  display: inline-block;
  text-align: center;
  height: 25px;
  width: 25px;
  line-height: 25px;
  font-weight: bolder;
  border-radius: 50%;
  cursor: pointer;
  color: white;
  background-color: ${({ theme }) => theme.colors.secondary.main};
  transition: 300ms background-color;
  margin: 0px 6px;
  user-select: none;
  &:hover {
    background-color: rgba(24, 44, 53, 1);
  }
`
const InputsHuespedContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  label {
    max-width: 224px;
  }
  @media (max-width: 670px) {
    label {
      max-width: 100%;
    }
  }
`
const Frase = styled.p`
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary.main};

  @media (max-width: 478px) {
    font-size: 28px;
  }
`

const PrecioContainerItemTableList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  > p {
    margin: 4px 0px;
    text-align: center;
    font-size: 18px;
  }
`
const PrecioNumberContainer = styled.div`
  font-size: 48px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.secondary.main};
  sub {
    font-size: 24px;
  }
`

const FormReserva = props => {
  const { minHeight } = props
  let tipoDeHabitacionData =
    props.habitacionesData["habitacion" + props.typeSelected]
  const { register, handleSubmit, setValue, errors } = useForm({
    defaultValues: {
      CantAdult: 1,
      CantRooms: 1,
      CantChildrens: 0,
      CostTotal: tipoDeHabitacionData.precioUnaNoche,
      costTotalConFechas: 0,
    },
  })

  const onSubmitEvent = data => {
    console.log("asdasd",data)
    let dataReservation = {
      initialDate: initialDate,
      finalDate: finalDate,
      cantDates: diffDays,
      finalCost:(costTotal >= tipoDeHabitacionData.precioUnaNoche &&
        costTotalConFechas === 0)
          ? costTotal
          : costTotalConFechas,
      type: tipoDeHabitacionData.type,
      numberRooms: data.CantRooms,
      numberAdults: data.CantAdult,
      numberChilds: data.CantChildrens,
    }
    props.reservar(dataReservation)
    toast("Gracias por reservar una habitacion 😊🎉🎉, lo estaremos esperando",{
      type: "success"
    })
  }

  const [initialDate, SetInitialDate] = useState(null)
  const [finalDate, SetFinalDate] = useState(null)
  const [focusInputDates, SetFocusInputDates] = useState(null)

  const [CantAdult, setCantAdult] = useState(1)
  const [CantChildrens, setCantChildrens] = useState(0)
  const [CantRooms, setCantRooms] = useState(1)
  const [diffDays, setDiffDays] = useState(0)
  const [costTotal, setCostTotal] = useState(
    tipoDeHabitacionData.precioUnaNoche
  )
  const [costTotalConFechas, setcostTotalConFechas] = useState(0)

  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 700 ? true : false
  )

  const handleChangeDates = ({ startDate, endDate }) => {
    if (startDate !== undefined && endDate !== undefined) {
      setValue("initialDateInput", startDate)
      setValue("finalDateInput", endDate)
      SetInitialDate(startDate)
      SetFinalDate(endDate)
      let coste = 0
      if (startDate !== null && endDate !== null) {
        let diffDatesVar = diffDates(startDate, endDate)
        setDiffDays(diffDatesVar)
        coste = diffDatesVar * costTotal
        setcostTotalConFechas(coste)
      }
    }
  }

  const handleCalc = (field, operation) => {
    if (operation === "add") {
      switch (field) {
        case "CantAdult":
          if (CantAdult + 1 > 16) return
          setValue("CantAdult", CantAdult + 1)
          setCantAdult(CantAdult + 1)

          if ((CantAdult + 1) % 4 === 0) {
            if (CantRooms + 1 > 10) return
            setValue("CantRooms", CantRooms + 1)
            setCantRooms(CantRooms + 1)

            setValue(
              "CostTotal",
              costTotal + tipoDeHabitacionData.precioUnaNoche
            )
            setCostTotal(costTotal + tipoDeHabitacionData.precioUnaNoche)
            setValue(
              "costTotalConFechas",
              diffDays * (costTotal + tipoDeHabitacionData.precioUnaNoche)
            )

            setcostTotalConFechas(
              diffDays * (costTotal + tipoDeHabitacionData.precioUnaNoche)
            )
          }
          break
        case "CantChildrens":
          if (CantChildrens + 1 > 10) return
          setValue("CantChildrens", CantChildrens + 1)
          setCantChildrens(CantChildrens + 1)
          break

        case "CantRooms":
          if (CantRooms + 1 > 10) return
          setValue("CantRooms", CantRooms + 1)
          setCantRooms(CantRooms + 1)

          setValue("CostTotal", costTotal + tipoDeHabitacionData.precioUnaNoche)
          setCostTotal(costTotal + tipoDeHabitacionData.precioUnaNoche)
          setValue(
            "costTotalConFechas",
            diffDays * (costTotal + tipoDeHabitacionData.precioUnaNoche)
          )
          setcostTotalConFechas(
            diffDays * (costTotal + tipoDeHabitacionData.precioUnaNoche)
          )

        default:
          break
      }
    } else {
      switch (field) {
        case "CantAdult":
          if (CantAdult - 1 < 1) return
          setValue("CantAdult", CantAdult - 1)
          setCantAdult(CantAdult - 1)

          if ((CantAdult - 1) % 4 === 0) {
            setValue("CantRooms", CantRooms - 1)
            setCantRooms(CantRooms - 1)

            setValue(
              "CostTotal",
              costTotal - tipoDeHabitacionData.precioUnaNoche
            )
            setCostTotal(costTotal - tipoDeHabitacionData.precioUnaNoche)
            setValue(
              "costTotalConFechas",
              diffDays * (costTotal - tipoDeHabitacionData.precioUnaNoche)
            )
            setcostTotalConFechas(
              diffDays * (costTotal - tipoDeHabitacionData.precioUnaNoche)
            )
          }
          break
        case "CantChildrens":
          if (CantChildrens - 1 < 0) return
          setValue("CantChildrens", CantChildrens - 1)
          setCantChildrens(CantChildrens - 1)
          break

        case "CantRooms":
          if (CantRooms - 1 < 1) return
          setValue("CantRooms", CantRooms - 1)
          setCantRooms(CantRooms - 1)

          setValue("CostTotal", costTotal - tipoDeHabitacionData.precioUnaNoche)
          setCostTotal(costTotal - tipoDeHabitacionData.precioUnaNoche)
          setValue(
            "costTotalConFechas",
            diffDays * (costTotal - tipoDeHabitacionData.precioUnaNoche)
          )
          setcostTotalConFechas(
            diffDays * (costTotal - tipoDeHabitacionData.precioUnaNoche)
          )

        default:
          break
      }
    }
  }
  const diffDates = (initialDate, finalDate) =>
    finalDate.diff(initialDate, "days")

  const handleEventResize = () => {
    if (window.innerWidth <= 750) {
      setIsMobile(true)
      return
    } else {
      setIsMobile(false)
    }
  }
  const handleResize = () => {
    window.addEventListener("resize", handleEventResize)
  }
  useEffect(() => {
    register({ name: "initialDateInput" }, { required: true })
    register({ name: "finalDateInput" }, { required: true })
    register({ name: "CantAdult" })
    register({ name: "CantRooms" })
    register({ name: "CantChildrens" })
    register({ name: "CostTotal" })
    register({ name: "costTotalConFechas" })
    handleResize()
  }, [register])

  // Config lenguaje datePickers
  moment.locale("es", esLocale)
  return (
    <FormContainer minHeight={minHeight} onSubmit={handleSubmit(onSubmitEvent)}>
      <Frase>Rellene los datos para realizar su reserva</Frase>
      <ItemForm margin="2px 0px 26px">
        <DateRangePicker
          startDatePlaceholderText="Fecha de ingreso"
          endDatePlaceholderText="Fecha de salida"
          startDate={initialDate} // momentPropTypes.momentObj or null,
          startDateId="initialDateInput" // PropTypes.string.isRequired,
          endDate={finalDate} // momentPropTypes.momentObj or null,
          endDateId="finalDateInput" // PropTypes.string.isRequired,
          onDatesChange={handleChangeDates} // PropTypes.func.isRequired,
          focusedInput={focusInputDates} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => SetFocusInputDates(focusedInput)} // PropTypes.func.isRequired,
          orientation={isMobile ? "vertical" : "horizontal"}
        />
      </ItemForm>
      <span>Huéspedes</span>
      <InputsHuespedContainer>
        <ItemForm>
          Adultos
          <InputContContainer>
            <BtnCont onClick={() => handleCalc("CantAdult", "subtract ")}>
              -
            </BtnCont>
            {CantAdult}
            <BtnCont onClick={() => handleCalc("CantAdult", "add")}>+</BtnCont>
          </InputContContainer>
        </ItemForm>
        <ItemForm>
          Niños
          <InputContContainer>
            <BtnCont onClick={() => handleCalc("CantChildrens", "subtract")}>
              -
            </BtnCont>
            {CantChildrens}
            <BtnCont onClick={() => handleCalc("CantChildrens", "add")}>
              +
            </BtnCont>
          </InputContContainer>
        </ItemForm>
      </InputsHuespedContainer>
      <ItemForm>
        Cantidad habitaciones
        <InputContContainer>
          <BtnCont onClick={() => handleCalc("CantRooms", "subtract")}>
            -
          </BtnCont>
          {CantRooms}
          <BtnCont onClick={() => handleCalc("CantRooms", "add")}>+</BtnCont>
        </InputContContainer>
      </ItemForm>
      <ItemForm>
        <div>
          Tipo de habitacion:
          <div> {tipoDeHabitacionData.type} </div>
        </div>
      </ItemForm>

      <ItemForm>
        <PrecioContainerItemTableList>
          <p>Total a pagar:</p>
          <PrecioNumberContainer>
            {costTotal >= tipoDeHabitacionData.precioUnaNoche &&
            costTotalConFechas === 0
              ? costTotal
              : costTotalConFechas}
            <sub>.99</sub>€
          </PrecioNumberContainer>
        </PrecioContainerItemTableList>
      </ItemForm>
      <ItemForm justifyContent="flex-end" margin="36px 0px 0px">
        <ButtomFormSubmit type="submit" value="Reservar" />
      </ItemForm>
    </FormContainer>
  )
}
const mapStateToProps = state => ({
  habitacionesData: state.habitacionesReducer.habitacionData,
})
// typeSelected
const mapDispatchToProps = dispatch => ({
  reservar: (dataReservation) => dispatch(reservarHabitacionOperation(dataReservation)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FormReserva)
