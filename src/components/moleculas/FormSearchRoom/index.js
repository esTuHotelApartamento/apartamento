import React, { useState, useEffect } from 'react'

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './dataRangerPicker.css'
import { DateRangePicker } from 'react-dates';
import esLocale from 'moment/locale/es'
import moment from 'moment'
import {navigate} from 'gatsby'


import { useForm } from 'react-hook-form'


import styled from 'styled-components'

const FormContainer = styled.form`
  padding: 24px 26px;
  width: fit-content;
  height: fit-content;
  display: flex;
  margin-top: 108px;
  flex-direction: column;
  border-radius: 12px;
  max-width: 500px;
  background-color: white;
  box-shadow: 0 16px 40px rgba(0,0,0,0.12);
  
  @media (max-width: 700px) {
    margin-top: 42px;
    max-width: 100%;
    background-color: transparent;
    box-shadow: none;
    padding: 24px 0px;
  }

`
const ItemForm = styled.label`
  margin: ${({ margin }) => margin ? margin : "0px"};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : "space-between"};


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
  outline:none;
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
  &:hover{
    background-color:  rgba(24, 44, 53, 1);
  }
`
const InputsHuespedContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  label {
    max-width: 224px;
  }
  @media (max-width: 670px) {
    label {
      max-width: 100%;
    } 
  }
`
const FraseBienvenida = styled.p`
  font-size: 42px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary.main};

  @media (max-width: 478px){
    font-size: 28px;
  }
  @media (max-width: 700px) {
   color: ghostwhite;

  }
`


const FormSearchRoom = (props) => {
  const { minHeight } = props;

  const { register, handleSubmit, setValue, errors } = useForm()
  const onSubmit = data => { console.log(data) }

  const [initialDate, SetInitialDate] = useState(null);
  const [finalDate, SetFinalDate] = useState(null);
  const [focusInputDates, SetFocusInputDates] = useState(null);

  const [CantAdult, setCantAdult] = useState(1);
  const [CantChildrens, setCantChildrens] = useState(0);

  const [isMobile, setIsMobile] = useState((typeof window !== `undefined`)?(window.innerWidth <= 700) ? true : false : false)

  const handleChangeDates = ({ startDate, endDate }) => {
    setValue("initialDateInput", startDate);
    setValue("finalDateInput", endDate);
    SetInitialDate(startDate);
    SetFinalDate(endDate);
  }


  const handleCalc = (field, operation) => {
    if (operation === "add") {
      if (field === "CantAdult") {
        if( CantAdult + 1 > 8) return
        setValue("CantAdult", CantAdult + 1);
        setCantAdult(CantAdult + 1)
      }
      else {
        if( CantChildrens + 1 > 5) return
        setValue("CantChildrens", CantChildrens + 1);
        setCantChildrens(CantChildrens + 1)
      }
    } else {
      if (field === "CantAdult") {
        if( CantAdult - 1 < 1) return
        setValue("CantAdult", CantAdult - 1);
        setCantAdult(CantAdult - 1)
      } else {
        if( CantChildrens - 1  < 0) return
        setValue("CantChildrens", CantChildrens - 1);
        setCantChildrens(CantChildrens - 1)
      }
    }

  }

  const handleEventResize = () => {
    if (window.innerWidth <= 750) {
      setIsMobile(true)
      return
    } else {
      setIsMobile(false)
    }
  }
  const handleResize = () => {
    window.addEventListener('resize', handleEventResize)
  }
  useEffect(() => {
    register({ name: "initialDateInput" });
    register({ name: "finalDateInput" });
    register({ name: "CantAdult" });
    register({ name: "CantChildrens" });
    handleResize()
  }, [register])

  // Config lenguaje datePickers
  moment.locale("es", esLocale);
  return (
    <FormContainer minHeight={minHeight} onSubmit={handleSubmit(onSubmit)}>
      <FraseBienvenida>
        Bienvenido <br />
        Reserva una habitación
      </FraseBienvenida>
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
          orientation={isMobile? "vertical" : "horizontal"}
        />
      </ItemForm>


      Huéspedes
      <InputsHuespedContainer>
        <ItemForm>
          Adultos
        <InputContContainer>
            <BtnCont onClick={() => handleCalc('CantAdult', 'subtract ')}>-</BtnCont>
            {CantAdult}
            <BtnCont onClick={() => handleCalc('CantAdult', 'add')}>+</BtnCont>
          </InputContContainer>
        </ItemForm>
        <ItemForm>
          Niños
        <InputContContainer>
            <BtnCont onClick={() => handleCalc('CantChildrens', 'subtract')}>-</BtnCont>
            {CantChildrens}
            <BtnCont onClick={() => handleCalc('CantChildrens', 'add')}>+</BtnCont>
          </InputContContainer>
        </ItemForm>
      </InputsHuespedContainer>

      <ItemForm justifyContent="flex-end" margin="36px 0px 0px">
        <ButtomFormSubmit type="submit" value="Buscar" onClick={()=> navigate("/reservar/")} />
      </ItemForm>
    </FormContainer>

  )
}

export default FormSearchRoom
