import React, { useEffect } from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import styled from "styled-components"

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

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
    overflow: hidden;

    max-width: 130%;
    margin-left: -70px;
    margin-top: -192px;
  }
`
const TitleRoom = styled.h1`
  font-size: 54px;
  color: rgba(237,242,92, 1);
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

const Section2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const TituloEventos = styled.h2`
  color: ${({ theme }) => theme.colors.secondary.main};
`
const CarouselContainer = styled.div``
const ItemCarouselStyled = styled.div`
  margin: 0 auto;
  img {
    max-height: 625px;
  }
`

const HabitacionSimplePage = () => {
  useEffect(() => {
    console.log(hotelData)
  })

  return (
    <>
      <SEO title="Habitación simple" />
      <Section>
        <ImageHead
          src="/habitaciones/habitaciones-simples-individuales/hsi2-cama.JPG"
          alt="Image"
        />
        <ContainerTexto>
          <TitleRoom>Habitación individual</TitleRoom>
          <DescRoom>
            <p>
              Muy acogedoras, dan una sensación de confort intemporal; diseñadas
              para momentos especiales y estancias tranquilas. Las habitaciones
              individuales, con 18 m2, tienen cama individual, baño en mármol
              con bañera y un espacioso comedor bien equipado, adaptado a tus necesidades. Además, le reciben con
              una bebida de bienvenida.
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
            <Link to={"/reservar/"}> Ver displonibles </Link>
          </BtnReserve>
        </ContainerTexto>
      </Section>

      {/* <Section2>
        <TituloEventos>
          Eventos en nuestro hotel
        </TituloEventos>
        <CarouselContainer>
          <Carousel interval={8000} transitionTime={1000} showStatus={false}  width="100%" showArrows swipeable autoPlay infiniteLoop useKeyboardArrows>
            <ItemCarouselStyled >
              <img src="/eventos/AlmuerzoEvento.jpg" alt="Evento hotel Almuerzo" />
            </ItemCarouselStyled>
            <ItemCarouselStyled >
              <img src="/eventos/salonReunion.jpg" alt="Evento hotel Almuerzo" />
              <p className="legend">Legend 1</p>
            </ItemCarouselStyled>
            <ItemCarouselStyled >
              <img src="/eventos/ClaseDeReunion.jpg" alt="Evento hotel reencuentro clase " />
            </ItemCarouselStyled>
            <ItemCarouselStyled >
              <img src="/eventos/SalonMarca.jpg" alt="Evento hotel reencuentro clase" />
              <p className="legend">Legend 2</p>
            </ItemCarouselStyled>
            <ItemCarouselStyled >
              <img src="/eventos/GraduacionEvento.jpg" alt="Evento hotel graduación" />
            </ItemCarouselStyled>
            <ItemCarouselStyled >
              <img src="/eventos/SalonFiestaGraduacion.jpg" alt="Evento hotel graduación" />
              <p className="legend">Legend 3</p>
            </ItemCarouselStyled>
          </Carousel>
        </CarouselContainer>
      </Section2> */}
    </>
  )
}
export default HabitacionSimplePage
