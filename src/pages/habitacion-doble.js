import React, { useEffect } from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import styled from "styled-components"

import { hotelData } from "../logic/DB/DatosHotel"

const Section = styled.div`
  width: 100%;
  padding: 40px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

const ContainerTexto = styled.div`
  max-width: 45%;
  min-height: 800px;
  padding-left: 24px;
  margin-left: 50%;
  @media (max-width: 600px) {
    width: 100%;
    padding: 24px 8px;
  }
  @media (max-width: 860px) {
    position: static;
    height: auto;
    z-index: 0;
    margin-left: 0%;
    margin-top: 24px;
    max-width: 100%;
  }
`
const ImageHead = styled.img`
  max-width: 50%;
  height: 100%;
  position: absolute;
  height: 120%;
  z-index: -120;
  left: 0px;
  top: 0px;
  @media (max-width: 860px) {
    position: static;
    height: auto;
    z-index: 0;
    max-width: 130%;
    margin-left: -70px;
    margin-top: -192px;
    overflow: hidden;
  }
`
const TitleRoom = styled.h1`
  font-size: 51px;
  color: ${({ theme }) => theme.colors.primary.main};
`
const DescRoom = styled.div`
  ul {
    li {
      margin: 2px;
    }
  }
`
const BtnReserve = styled.div`
  float: right;
  padding: 12px 24px;
  font-size: 18px;
  color: white;
  background-color: #4cd964;
  border-radius: 8px;
  cursor: pointer;
  a {
    text-decoration: none;
    color: inherit;
  }
`

const HabitacionMatrimonialPage = () => {
  useEffect(() => {
    console.log(hotelData)
  })

  return (
    <>
      <SEO title="Habitación Matrimonial" />
      <Section>
        <ImageHead
          src="/habitaciones/habitaciones-simple-matrimonial/hsm3-cama.JPG"
          alt="Image"
        />
        <ContainerTexto>
          <TitleRoom>Habitación Doble</TitleRoom>
          <DescRoom>
            <p>
              Muy acogedoras, dan una sensación de confort intemporal; diseñadas
              para momentos especiales y estancias tranquilas. Las habitaciones
              individuales, con 90 m2, tienen doble camas, baño en mármol con
              bañera y un espacioso comedor bien equipado, adaptado a tus
              necesidades. Además, le reciben con una bebida de bienvenida.
            </p>
            <ul>
              <li>Concina bien equipada</li>
              <li>Comedor</li>
              <li>Wifi gratuito</li>
              <li>Aire acondicionado con termostato individual</li>
              <li>Televisión LCD-100 canales</li>
              <li>Teléfono</li>
              <li>Minibar</li>
              <li>Espejo</li>
              <li>Secador de pelo</li>
              <li>Zapatillas</li>
              <li>Albornoz</li>
              <li>Escritorio</li>
              <li>Internet ADSL</li>
              <li>Caja fuerte individual digital </li>
            </ul>
          </DescRoom>
          <BtnReserve>
            {" "}
            <Link to={"/reservar#simple"}> Ver displonibles </Link>{" "}
          </BtnReserve>
        </ContainerTexto>
      </Section>
    </>
  )
}
export default HabitacionMatrimonialPage
