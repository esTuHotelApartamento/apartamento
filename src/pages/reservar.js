import React, { useState, useEffect } from "react"
import styled from "styled-components"

import SEO from "../components/seo"
import { connect } from "react-redux"
import { reservarHabitacionOperation } from "../../redux/operations/habitaciones"

import Modal from "react-modal"
import FormReserva from "../components/moleculas/FormReserva/FormReserva"
import FormLogin from "../components/moleculas/FormLogin"
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    zIndex: "200"
  }
}

Modal.setAppElement("#___gatsby")

const Section = styled.div`
  margin: 100px auto;
`

const ContainerPrinList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ItemPrinListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 300px;
  width: 100%;
  margin: 4px 0px;
  padding: 0;
  border: 1px solid #eee;

  border-radius: 12px;
  overflow: hidden;
  text-align: center;

  @media (max-width: 600px) {
    flex-direction: column;
    height: auto;
    div {
      margin: 24px 0px; 
    }
    img{
      width: 100%;
    }

  }
`
const ImgPrinListTable = styled.img`
  width: 200px;
  height: 300px;
`
const TitleSection = styled.h1`
  text-align: ${({ aling }) => (aling ? aling : "center")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "inherit")};
`
const PrecioContainerItemTableList = styled.div`
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

const BtnReservarItemTableList = styled.div`
  color: white;
  background-color: ${({ theme }) => theme.colors.secondary.main};
  transition: 300ms;
  cursor: pointer;
  display: flex;
  text-align: center;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 12px;
  :hover {
    background-color: ${({ theme }) => theme.colors.emphasis};
  }
  @media (max-width: 600px) {
    width: 100%;  

}
`

const CloseModalBtn = styled.div`
  width: fit-content;
  float: right;
  padding: 0;
  font-weight: 900;
  text-align: center;
  cursor: pointer;
  :hover {
    color: #aeaeae;
  }
`

const ReservarPage = props => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [typeSelected, settypeSelected] = useState("Individual")
  const [isLogin, setIsLogin] = useState(props.isLogin)

  useEffect(() => {
    if (isLogin !== props.isLogin) {
      setIsLogin(props.isLogin)
    }
  })

  function openModal(type) {
    setIsOpen(true)
    settypeSelected(type)
  }

  function closeModal() {
    setIsOpen(false)
  }
  return (
    <>
      <SEO title="Pagina para reservar" />
      <Section>
        <TitleSection fontSize="72px">Realiza una reserva</TitleSection>
        <ContainerPrinList>
          <ItemPrinListContainer>
            <ImgPrinListTable src={props.habitacionData.habitacionIndividual.img} />
            <PrecioContainerItemTableList>
              <p>Una noche</p>
              <PrecioNumberContainer>
                {props.habitacionData.habitacionIndividual.precioUnaNoche}
                <sub>.99</sub>€
              </PrecioNumberContainer>
            </PrecioContainerItemTableList>
            <BtnReservarItemTableList onClick={()=>openModal("Individual")}>
              <span>Reservar</span>
            </BtnReservarItemTableList>
          </ItemPrinListContainer>
          <ItemPrinListContainer>
            <ImgPrinListTable
              src={props.habitacionData.habitacionDoble.img}
            />

            <PrecioContainerItemTableList>
              <p>Una noche</p>
              <PrecioNumberContainer>
                {props.habitacionData.habitacionDoble.precioUnaNoche}
                <sub>.99</sub>€
              </PrecioNumberContainer>
            </PrecioContainerItemTableList>
            <BtnReservarItemTableList onClick={()=>openModal("Doble")}>
              <span>Reservar</span>
            </BtnReservarItemTableList>
          </ItemPrinListContainer>

          <ItemPrinListContainer>
            <ImgPrinListTable src={props.habitacionData.habitacionTriple.img} />
            <PrecioContainerItemTableList>
              <p>Una noche</p>
              <PrecioNumberContainer>
                {props.habitacionData.habitacionTriple.precioUnaNoche}
                <sub>.99</sub>€
              </PrecioNumberContainer>
            </PrecioContainerItemTableList>
            <BtnReservarItemTableList onClick={()=>openModal("Triple")}>
              <span>Reservar</span>
            </BtnReservarItemTableList>
          </ItemPrinListContainer>
        </ContainerPrinList>
      </Section>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <CloseModalBtn onClick={closeModal}>X</CloseModalBtn>

        {isLogin ? (
          <FormReserva typeSelected={typeSelected} />
        ) : (
          <>
            <h3>
              Lo lamento debe de estar registrado para realizar esta operación
            </h3>
            <FormLogin contextSite="fuera"/>
          </>
        )}
      </Modal>
    </>
  )
}

const mapStateToProps = state => ({
  habitacionData: state.habitacionesReducer.habitacionData,
  isLogin: state.loginRegisterUser.isLogin,
})

const mapDispatchToProps = dispath => ({
  reservarHabitacion: data => {
    dispath(reservarHabitacionOperation(data))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ReservarPage)
