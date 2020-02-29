import React from "react"
import SEO from "../components/seo"

import { FormSearchRoom } from "../components/moleculas"

import styled from "styled-components"
import { Link } from "gatsby"

const ImagePortada = styled.img`
  position: absolute;
  z-index: -100;
  top: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  /* transform: scaleX(-1);
  filter: FlipH; */
  @media (max-width: 700px) {
    height: 340px;
    top: -94px;
  }
`
const Section1 = styled.div`
  display: flex;
  /* justify-content: flex-end; */
  @media (max-width: 700px) {
    justify-content: center;
    padding: 0px 8px;
  }
`

const Section3 = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  margin-top: 50vh;

  @media (max-width: 700px) {
    margin-top: 40px;
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
const TitleSection = styled.h2`
  color: ${({ theme }) => theme.colors.secondary.main};
  font-weight: 900;
  text-align: center;
  margin-top: 70px;
  font-size: 72px;
  padding: 0 5px;
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

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <Section1>
        <FormSearchRoom />
        {/* <ImagePortada src="./portada/palmera-hotel.jpg" alt="fondo portada"/> */}
        <ImagePortada src="./portada/habitacion-desayuno.jpg" alt="fondo portada"/>
        {/* <ImagePortada src="./portada/vistas-montaña.jpg" alt="fondo portada" /> */}
      </Section1>

      <Section3>
        <TitleSection>Nuestas Habitaciones</TitleSection>
        <DescHabitaciones>
          <strong>Moderno</strong>, <strong>acogedor</strong>,{" "}
          <strong>familiar</strong>, <strong>cálido</strong>, tal vez son
          algunas de palabras que nos describen mejor. <br />
          Disponemos de XX habitaciones simples, xx habitaciones dobles, xx
          suits, todas con su comedor, baño, acondicionadas con: aire
          acondicionado, nevera, agua caliente, caja de seguridad (opcional).
        </DescHabitaciones>
        <ContainerCardsRoom>
          <Link to="/habitacion-simple/">
            <ItemCardRoom>
              <IntemCardRoomImg src="./habitaciones/habitaciones-simples-individuales/hsi2-cama.JPG" />
              <IntemCardRoomText>
                <TitleH3> Individual </TitleH3>
                <p>
                  Las habitaciones simples son las más sencillas pero muy
                  cómodas y agradables, algunas de ellas tienen vista parcial al
                  mar.
                </p>
              </IntemCardRoomText>
              <VerMasBtn>Ver más</VerMasBtn>
            </ItemCardRoom>
          </Link>
          <Link to="/habitacion-matrimonial/">
            <ItemCardRoom>
              <IntemCardRoomImg src="./habitaciones/habitaciones-simple-matrimonial/hsm3-cama.JPG" />
              <IntemCardRoomText>
                <TitleH3> Doble </TitleH3>
                <p>
                  Una habitación matrimonial es un pequeño rincón privado para
                  disfrutar, en el que la tranquilidad y la intimidad son como
                  las del hogar.
                </p>
              </IntemCardRoomText>
              <VerMasBtn>Ver más</VerMasBtn>
            </ItemCardRoom>
          </Link>
          <Link to="/habitacion-suit/">
            <ItemCardRoom>
              <IntemCardRoomImg src="./habitaciones/habitaciones-suit/hs2.jpg" />
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

      {/* <Section2>
        <TituloEventos>
          Eventos en nuestro hotel
        </TituloEventos>
        <CarouselContainer>
          <Carousel interval={8000} transitionTime={1000} showStatus={false} dynamicHeight width="50%" showArrows swipeable autoPlay infiniteLoop useKeyboardArrows>
            <ItemCarouselStyled >
              <img src="./eventos/AlmuerzoEvento.jpg" alt="Evento hotel Almuerzo" />
            </ItemCarouselStyled>
            <ItemCarouselStyled >
              <img src="./eventos/salonReunion.jpg" alt="Evento hotel Almuerzo" />
              <p className="legend">Legend 1</p>
            </ItemCarouselStyled>
            <ItemCarouselStyled >
              <img src="./eventos/ClaseDeReunion.jpg" alt="Evento hotel reencuentro clase " />
            </ItemCarouselStyled>
            <ItemCarouselStyled >
              <img src="./eventos/SalonMarca.jpg" alt="Evento hotel reencuentro clase" />
              <p className="legend">Legend 2</p>
            </ItemCarouselStyled>
            <ItemCarouselStyled >
              <img src="./eventos/GraduacionEvento.jpg" alt="Evento hotel graduación" />
            </ItemCarouselStyled>
            <ItemCarouselStyled >
              <img src="./eventos/SalonFiestaGraduacion.jpg" alt="Evento hotel graduación" />
              <p className="legend">Legend 3</p>
            </ItemCarouselStyled>
          </Carousel>
        </CarouselContainer>
      </Section2> */}
    </>
  )
}

export default IndexPage
