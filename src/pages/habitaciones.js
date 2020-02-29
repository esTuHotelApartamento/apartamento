import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import { hotelData } from "../logic/DB/DatosHotel"
import styled from "styled-components"

import SEO from "../components/seo"
import { connect } from "react-redux"



const ContainerTableList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
`
const NumeroItemTableList = styled.div`
  width: 30px;
  text-align: center;
`
const ImageItemTableList = styled.img`
  width: 180px;
  height: 160px;
  margin: 0px 12px;
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
      case "simple":
        return theme.colors.primary.shadow
      case "matrimonial":
        return theme.colors.secondary.main
      case "suit":
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
  width: 40%;

  @media (max-width: 990px) {
    display: none;
  }
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
`

// Otra seccion .------------------------------------

const Section = styled.div`
  margin: 100px auto;
`

const TitleSection = styled.h1`
  text-align: ${({ aling }) => (aling ? aling : "center")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "inherit")};
`

const Section3 = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  @media (max-width: 700px) {
    margin-top: 20px;
  }
`
const ContainerCardsRoom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  a {
    text-decoration: none;
    color: inherit;
  }
`
const ItemCardRoom = styled.div`
  border: 0.5px solid #eee;
  border-radius: 12px;
  max-width: 384px;
  height: 700px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0px 12px -8px black;
  cursor: pointer;
  transition: box-shadow 300ms;
  overflow: hidden;
  margin: 24px 0px;
  &:hover {
    box-shadow: 0 0px 51px -41px black;
    img {
      transform: scale(1.03);
    }
    > div {
      margin-top: 8px;
    }
  }

  @media (max-width: 675px) {
    max-width: 100%;
    border: none;
    border-radius: 0px;
  }
`
const IntemCardRoomImg = styled.img`
  transition: 300ms;
  height: 64%;
  width: 100%;
  border-radius: 12px 12px 0 0;

  @media (max-width: 675px) {
    border-radius: 0px;
  }
`
const IntemCardRoomText = styled.div`
  transition: 300ms;
  padding: 0px 12px;
`
const TitleH3 = styled.h3`
  color: ${({ theme }) => theme.colors.secondary.main};
  font-weight: 700;
  text-align: center;
  margin-top: 16px;
`

const DescHabitaciones = styled.p`
  padding: 0px 12px;
`
const VerMasBtn = styled.p`
  text-align: center;
  font-size: 17px;
  margin-top: 52px;
  width: 100%;
  color: #8782ff;
`
// filtro..........

const HabitacionesPage = props => {
  const [modalIsOpen, setIsOpen] = useState(false)

  const [isLogin, setIsLogin] = useState(props.isLogin)

  useEffect(() => {
    if (isLogin !== props.isLogin) {
      setIsLogin(props.isLogin)
    }
  })

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <SEO title="Todas las habitaciones" />
      <Section3>
        <ContainerCardsRoom>
          <Link to="/habitacion-individual/">
            <ItemCardRoom>
              <IntemCardRoomImg src="/habitaciones/habitaciones-simples-individuales/hsi2-cama.JPG" />
              <IntemCardRoomText>
                <TitleH3> Individual </TitleH3>
                <p>
                  Las habitaciones individual son las más sencillas pero muy
                  cómodas y agradables, algunas de ellas tienen vista parcial al
                  mar.
                </p>
              </IntemCardRoomText>
              <VerMasBtn>Ver más</VerMasBtn>
            </ItemCardRoom>
          </Link>
          <Link to="/habitacion-doble/">
            <ItemCardRoom>
              <IntemCardRoomImg src="/habitaciones/habitaciones-simple-matrimonial/hsm3-cama.JPG" />
              <IntemCardRoomText>
                <TitleH3> Doble </TitleH3>
                <p>
                  Una habitación doble es un pequeño rincón privado para
                  disfrutar, en el que la tranquilidad y la intimidad son como
                  las del hogar.
                </p>
              </IntemCardRoomText>
              <VerMasBtn>Ver más</VerMasBtn>
            </ItemCardRoom>
          </Link>
          <Link to="/habitacion-triple/">
            <ItemCardRoom>
              <IntemCardRoomImg src="/habitaciones/habitaciones-suit/hs2.jpg" />
              <IntemCardRoomText>
                <TitleH3> Triple </TitleH3>
                <p>
                  Más espacio y muebles que una habitación simple, con sofacama,
                  cama matrimonial, comedor, oficina y una cocina.
                </p>
              </IntemCardRoomText>
              <VerMasBtn>Ver más</VerMasBtn>
            </ItemCardRoom>
          </Link>
        </ContainerCardsRoom>
      </Section3>

     

     
    </>
  )
}

const mapStateToProps = state => ({
  isLogin: state.loginRegisterUser.isLogin,
})

export default connect(mapStateToProps, null)(HabitacionesPage)
