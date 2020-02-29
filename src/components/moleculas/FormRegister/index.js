import React, { useState, useEffect } from "react"
import { Link, navigate } from "gatsby"

import { useForm } from "react-hook-form"
import styled from "styled-components"
import { toast } from "react-toastify"

import { connect } from "react-redux"
import { RegisterUserOperation } from "../../../../redux/operations/loginRegisterUser"

const FormContainer = styled.form`
  padding: 20px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.whiteCream};
  max-width: 600px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const InputElement = styled.input`
  margin: 6px 0px;
  width: 100%;
  height: 36px;
  border: 1px solid lightgray;
  border-radius: 4px;
  font-size: 16px;
  padding: 0 12px;
`
const LabelElement = styled.label`
  width: 90%;
  display: flex;
  flex-direction: column;
  text-align: left;
`

const ButtomFormSubmit = styled.input`
  margin: 24px 0px 12px;
  appearance: none;
  border: none;
  font-weight: 900;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.emphasis};
  font-size: 18px;
  width: 90%;
  cursor: pointer;
`
const Separador = styled.hr`
  margin: 16px 0px;
  width: 95%;
  border: 0.5px solid lightgrey;
  border-radius: 32px;
  opacity: 0.5;
`

const ErrorMsj = styled.div`
  font-size: 12px;
  color: red;
  margin-bottom: 12px;
`

const FormRegister = props => {
  const { register, handleSubmit, setValue, errors } = useForm()
  const onSubmit = data => {
    window.localStorage.setItem("email", data.email)
    window.localStorage.setItem("password", data.password)
    toast("Esta registrado yeeeeiiiiiii!!!!", {
      type: "success",
    })
    props.registerUser({ mail: data.email, pass: data.password })

    navigate("/")
  }

  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [rePass, setRePass] = useState("")

  const handleInputEmail = e => {
    setValue("email", e.target.value)
    setEmail(e.target.value)
  }

  const handleInputPass = e => {
    setValue("password", e.target.value)
    setPass(e.target.value)
  }

  const handleInputRePass = e => {
    setValue("passwordRepeat", e.target.value)
    setRePass(e.target.value)
  }

  const handleMismoPass = () => {
    return pass === rePass
  }

  useEffect(() => {
    register({ name: "email" }, { required: true })
    register(
      { name: "password" },
      {
        required: true,
        validate: handleMismoPass || "Tiene que ser la misma contraseña",
      }
    )
    register(
      { name: "passwordRepeat" },
      {
        required: true,
        validate: handleMismoPass || "Tiene que ser la misma contraseña",
      }
    )
  }, [register, errors, pass, rePass])

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      Crea tu cuenta Crea una cuenta para utilizar todos nuestros servicios
      fácilmente, y resivir buenas ofertas.
      <Separador />
      <LabelElement>
        E-mail
        <InputElement onChange={handleInputEmail} type="email" name="email" />
        {errors.email && errors.email.type === "required" && (
          <ErrorMsj>Este campo es requerido</ErrorMsj>
        )}
      </LabelElement>
      <LabelElement>
        Contraseña
        <InputElement
          onChange={handleInputPass}
          type="password"
          name="password"
        />
        {errors.password && errors.password.type === "required" && (
          <ErrorMsj>Este campo es requerido</ErrorMsj>
        )}
        {errors.password && errors.password.type === "validate" && (
          <ErrorMsj>Tiene que ser la misma contraseña</ErrorMsj>
        )}
      </LabelElement>
      <LabelElement>
        Repetir la contraseña
        <InputElement
          onChange={handleInputRePass}
          type="password"
          name="passwordRepeat"
        />
        {errors.passwordRepeat && errors.passwordRepeat.type === "required" && (
          <ErrorMsj>Este campo es requerido</ErrorMsj>
        )}
        {errors.passwordRepeat && errors.passwordRepeat.type === "validate" && (
          <ErrorMsj>Tiene que ser la misma contraseña</ErrorMsj>
        )}
      </LabelElement>
      <ButtomFormSubmit type="submit" value="Registrarse" />
      <Separador />
      ¿Ya tienes una cuenta? <Link to="./log-in/"> Inicia sesión </Link>
    </FormContainer>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
  return {
    registerUser: dataUser => {
      dispatch(RegisterUserOperation(dataUser))
    },
  }
}

export default connect(null, mapDispatchToProps)(FormRegister)
