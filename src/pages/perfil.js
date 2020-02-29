import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import { connect } from "react-redux"
import { cerrarSesion } from "../../redux/operations/loginRegisterUser"
import moment from "moment"

import styled from "styled-components"

const Section = styled.div`
  margin: 100px auto;
`

const TitleSection = styled.h1`
  text-align: ${({ aling }) => (aling ? aling : "center")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "inherit")};
`

const ContainerTableList = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.5px solid #eee;
  background-color: #fcfcfc;
  border-radius: 12px;
  min-height: 500px;
  padding: 12px 4px;
  @media (max-width: 800px) {
    padding: 4px;
    text-align: center;
    div {
      margin: 12px 0px;
    }
    height: auto;
  }
`
const ItemTableListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 160px;
  width: 100%;
  margin: 4px 0px;
  padding: 0px 0px 0px 12px;
  border: 1px solid #eee;
  border-radius: 12px;
  background-color: #fff;
  @media (max-width: 800px) {
    flex-direction: column;
    height: auto;
    width: 100%;
  }
`
const NumeroItemTableList = styled.div`
  width: 30px;
  text-align: center;
  @media (max-width: 800px) {
    display: none;
  }
`
const ImageItemTableList = styled.img`
  width: 180px;
  max-height: 160px;
  margin: 0px 12px;
  @media (max-width: 800px) {
    
    max-height: 300px;
  }
`
const ImgNumberContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const TagTipeItemTableList = styled.div`
  width: fit-content;
  height: 40px;
  padding: 0px 8px;
  text-align: center;
  line-height: 40px;

  background-color: ${({ bgcTipe, theme }) => {
    switch (bgcTipe) {
      case "Individual":
        return theme.colors.primary.shadow
      case "Doble":
        return theme.colors.secondary.main
      case "Triple":
        return theme.colors.emphasis
      default:
        break
    }
  }};

  a {
    text-decoration: none !important;
    color: white;
  }
`

const DescBreveItemTableList = styled.div`
  width: 50%;
`

const PrecioContainerItemTableList = styled.div`
  > p {
    margin: 4px 0px;
    text-align: center;
    font-size: 18px;
  }
`
const PrecioNumberContainer = styled.div`
  font-size: 24px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.secondary.main};
  text-align: center;
  sub {
    font-size: 12px;
  }
`
const NumeroDeReserva = styled.div`
  font-size: 32px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.secondary.main};
  margin: 0px 24px;
  text-align: center;
  div {
    font-size: 14px;
  }
`

// Header paerfil
const ContainerPerfilHeader = styled.div`
  display: flex;
  min-height: 300px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
const ImgPerfil = styled.img`
  border-radius: 50%;
  max-width: 200px;
  max-height: 200px;
  background-color: ${({ theme }) => theme.colors.emphasis};
`
const ContainerDatosPerfil = styled.div`
  padding: 12px;
`
const IdentificacionUsuario = styled.div`
  span {
    color: ${({ theme }) => theme.colors.secondary.shadow};
    padding: 4px 0;
    font-weight: 900;
  }
`
const BtnCerrarSesion = styled.div`
  font-size: 12.5px;
  cursor: pointer;
  transition: 300ms;
  margin: 8px 0px;
  padding: 12px;
  :hover {
    color: red;
    opacity: 0.6;
  }
`

const PerfilPage = props => {
  return (
    <>
      <SEO title="Pagina para iniciar sesión" />
      <ContainerPerfilHeader>
        <ImgPerfil src="/perfil/usuario2.png" alt="Img_user_define" />
        <ContainerDatosPerfil>
          <IdentificacionUsuario>
            <div>Huésped</div>
            <span>{props.mailUser}</span>
          </IdentificacionUsuario>
          <BtnCerrarSesion onClick={() => props.cerrarSesion()}>
            Cerrar sesión
          </BtnCerrarSesion>
        </ContainerDatosPerfil>
      </ContainerPerfilHeader>
      <div>
        <Section>
          <TitleSection aling={"left"} fontSize="32px">
            Mis Reservas
          </TitleSection>

          <ContainerTableList>
            {props.listaReservas &&
              props.listaReservas.length > 0 &&
              props.listaReservas.map((habitacion, index) => (
                <ItemTableListContainer key={index + "_" + habitacion.type}>
                  <ImgNumberContainer>
                    <NumeroItemTableList>
                      {habitacion.numberIdHabitacion}
                    </NumeroItemTableList>
                    {props.habitacionDataType[
                      "habitacion" + habitacion.type
                    ] && (
                      <ImageItemTableList
                        src={
                          props.habitacionDataType[
                            "habitacion" + habitacion.type
                          ].img
                        }
                        alt="imagen HH"
                      />
                    )}
                  </ImgNumberContainer>
                  <TagTipeItemTableList bgcTipe={habitacion.type}>
                    <Link to={"/habitacion-" + habitacion.type + "/"}>
                      {habitacion.type}
                    </Link>
                  </TagTipeItemTableList>
                  <DescBreveItemTableList>
                    <div>
                      <span>Fecha del </span>
                      {moment(habitacion.initialDate).format("DD/MM/YYYY") +
                        "  hasta  " +
                        moment(habitacion.finalDate).format("DD/MM/YYYY")}
                      <div>
                        <span>Total dias:</span>
                        {" " + habitacion.cantDates}
                      </div>
                    </div>
                  </DescBreveItemTableList>
                  <PrecioContainerItemTableList>
                    <p>Coste final</p>
                    <PrecioNumberContainer>
                      {habitacion.finalCost}
                      <sub>.99</sub>€
                    </PrecioNumberContainer>
                  </PrecioContainerItemTableList>
                  <NumeroDeReserva>
                    <div>Numero de reserva</div>
                    {habitacion.numberRefReserva}
                  </NumeroDeReserva>
                </ItemTableListContainer>
              ))}
          </ContainerTableList>
        </Section>
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  mailUser: state.loginRegisterUser.userLogin.mail,
  listaReservas: state.habitacionesReducer.habitacionesReservadas,
  habitacionDataType: state.habitacionesReducer.habitacionData,
})

const mapDispatchToProps = dispath => ({
  cerrarSesion: () => {
    dispath(cerrarSesion())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(PerfilPage)
