import React, { useState, useEffect } from "react"
import { Link, navigate } from "gatsby"

import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

import styled from "styled-components"
import { connect } from "react-redux"
import { SaveDataLoginOperation } from "../../../../redux/operations/loginRegisterUser"

const FormContainer = styled.form`
  padding: 20px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.whiteCream};
  max-width: ${({ contextSite }) =>
    contextSite === "fuera" ? "100%" : "600px"};
  margin: ${({ contextSite }) =>
    contextSite === "fuera" ? "0px" : "100px auto"};
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
const FormLogin = props => {
  const { register, handleSubmit, setValue, errors } = useForm()

  const onSubmit = data => {
    toast("iniciado", {
      type: "success",
    })

    props.loginUser({ mail: data.email })
    if (props.contextSite === "fuera") return;
    navigate("/")
  }

  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  const handleInputEmail = e => {
    setValue("email", e.target.value)
    setEmail(e.target.value)
  }

  const handleInputPass = e => {
    setValue("password", e.target.value)
    setPass(e.target.value)
  }

  const usuarioCorreo = value => {
    if (window.localStorage.getItem("email") === value) return true
    return false
  }

  const usuarioPass = value => {
    if (window.localStorage.getItem("password") === value) return true
    return false
  }
  useEffect(() => {
    register(
      { name: "email" },
      {
        required: true,
        validate: usuarioCorreo || "mal",
      }
    )
    register(
      { name: "password" },
      {
        required: true,
        validate: usuarioPass || "mal",
      }
    )
  }, [register, errors, pass, email])

  return (
    <FormContainer
      onSubmit={handleSubmit(onSubmit)}
      contextSite={props.contextSite}
    >
      Inicia sesión
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
      </LabelElement>
      {((errors.password && errors.password.type === "validate") ||
        (errors.email && errors.email.type === "validate")) && (
        <ErrorMsj>Este ususario no existe</ErrorMsj>
      )}
      <ButtomFormSubmit type="submit" value="Iniciar" />
      <Separador />
      ¿Aun no tienes una cuenta? <Link to="./sign-in/"> Crear cuenta </Link>
    </FormContainer>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
  return {
    loginUser: dataUser => {
      dispatch(SaveDataLoginOperation(dataUser))
    },
  }
}

export default connect(null, mapDispatchToProps)(FormLogin)
