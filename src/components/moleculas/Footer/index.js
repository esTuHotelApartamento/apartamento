import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary.main};
  color: white;
`

const ItemsContainer = styled.div`
  display: flex;
  width: 85%;

  margin: 0 auto;
  align-items: center;
  justify-content: space-around;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  padding: 50px 24px;
  @media (max-width: 600px) {
    max-width: 100%;
    padding: 24px 4px;
  }
`

const ItemLeft = styled.div`
  max-width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    max-width: 100%;
  }
`
const Ubicacion = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: 200;
  text-align: center;
`
const ContainerUbicacionRRSS = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;

  @media (max-width: 800px) {
    width: 100%;
    padding: 24px 40px;
  }
  @media (max-width: 500px) {
    width: 100%;
    padding: 0;
    margin: 12px 0px;
  }
`

const ItemRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 60%;
  @media (max-width: 600px) {
    width: 100%;
  }
`

const ItemFooter = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 6px 24px 6px;
  display: flex;
  width: 100%;
  font-size: 12px;
  text-align: center;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.secondary.shadow};
  a {
    cursor: pointer;
    transition: 300ms;
    :hover {
      color: lightslategrey;
    }
  }
  a,
  div {
    padding: 4px;
  }

  @media (min-width: 789px) {
    justify-content: center;
    div {
      width: 50%;
      text-align: right;
    }
  }
`
const ContainerRRSS = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 12px 0px;
`
const IconRRSS = styled.a`
  cursor: pointer;
  svg {
    width: 25px;
    height: 25px;
    path {
      fill: white;
      transition: 300ms;
    }
  }

  :hover {
    svg {
      path {
        opacity: 0.5;
      }
    }
  }
`

const ServiciosContainer = styled.div`
  min-height: 120px;
  a {
    display: block;
    text-decoration: none;
    color: inherit;
  }
`

const HabitacionesContainer = styled.div`
  min-height: 120px;
  a {
    display: block;
    text-decoration: none;
    color: inherit;
  }
`

const Footer = () => {
  return (
    <FooterStyled>
      <ItemsContainer>
        <ItemLeft>
          <div>Acerca de nosotros</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            maxime asperiores neque porro animi. Ipsa incidunt nisi voluptatum
            aspernatur rem facilis, molestiae similique totam ea odio
            consequatur autem, reprehenderit voluptates.
          </p>
        </ItemLeft>
        <ItemRight>
          <ContainerUbicacionRRSS>
            <ContainerRRSS>
              <IconRRSS
                href="https://www.facebook.com/Estu.hotalapartamento "
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="512"
                  height="512"
                  viewBox="0 0 512 512"
                >
                  <title></title>
                  <g id="icomoon-ignore"></g>
                  <path d="M464 0h-416c-26.4 0-48 21.6-48 48v416c0 26.4 21.6 48 48 48h208v-224h-64v-64h64v-32c0-52.9 43.1-96 96-96h64v64h-64c-17.6 0-32 14.4-32 32v32h96l-16 64h-80v224h144c26.4 0 48-21.6 48-48v-416c0-26.4-21.6-48-48-48z"></path>
                </svg>
              </IconRRSS>
              <IconRRSS
                href="https://twitter.com/estuhotelapto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="512"
                  height="512"
                  viewBox="0 0 512 512"
                >
                  <title></title>
                  <g id="icomoon-ignore"></g>
                  <path d="M512 113.2c-18.8 8.4-39.1 14-60.3 16.5 21.7-13 38.3-33.6 46.2-58.1-20.3 12-42.8 20.8-66.7 25.5-19.2-20.4-46.5-33.1-76.7-33.1-58 0-105 47-105 105 0 8.2 0.9 16.2 2.7 23.9-87.3-4.4-164.7-46.2-216.5-109.8-9 15.5-14.2 33.6-14.2 52.8 0 36.4 18.5 68.6 46.7 87.4-17.2-0.5-33.4-5.3-47.6-13.1 0 0.4 0 0.9 0 1.3 0 50.9 36.2 93.4 84.3 103-8.8 2.4-18.1 3.7-27.7 3.7-6.8 0-13.3-0.7-19.8-1.9 13.4 41.7 52.2 72.1 98.1 73-36 28.2-81.2 45-130.5 45-8.5 0-16.8-0.5-25.1-1.5 46.6 29.9 101.8 47.2 161.1 47.2 193.2 0 298.9-160.1 298.9-298.9 0-4.6-0.1-9.1-0.3-13.6 20.5-14.7 38.3-33.2 52.4-54.3z"></path>
                </svg>
              </IconRRSS>
              <IconRRSS
                href="https://www.instagram.com/estu.hotelapto/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="512"
                  height="512"
                  viewBox="0 0 512 512"
                >
                  <title></title>
                  <g id="icomoon-ignore"></g>
                  <path d="M256 46.1c68.4 0 76.5 0.3 103.4 1.5 25 1.1 38.5 5.3 47.5 8.8 11.9 4.6 20.5 10.2 29.4 19.1 9 9 14.5 17.5 19.2 29.4 3.5 9 7.7 22.6 8.8 47.5 1.2 27 1.5 35.1 1.5 103.4s-0.3 76.5-1.5 103.4c-1.1 25-5.3 38.5-8.8 47.5-4.6 11.9-10.2 20.5-19.1 29.4-9 9-17.5 14.5-29.4 19.2-9 3.5-22.6 7.7-47.5 8.8-27 1.2-35.1 1.5-103.4 1.5s-76.5-0.3-103.4-1.5c-25-1.1-38.5-5.3-47.5-8.8-11.9-4.6-20.5-10.2-29.4-19.1-9-9-14.5-17.5-19.2-29.4-3.5-9-7.7-22.6-8.8-47.5-1.2-27-1.5-35.1-1.5-103.4s0.3-76.5 1.5-103.4c1.1-25 5.3-38.5 8.8-47.5 4.6-11.9 10.2-20.5 19.1-29.4 9-9 17.5-14.5 29.4-19.2 9-3.5 22.6-7.7 47.5-8.8 26.9-1.2 35-1.5 103.4-1.5zM256 0c-69.5 0-78.2 0.3-105.5 1.5-27.2 1.2-45.9 5.6-62.1 11.9-16.9 6.6-31.2 15.3-45.4 29.6-14.3 14.2-23 28.5-29.6 45.3-6.3 16.3-10.7 34.9-11.9 62.1-1.2 27.4-1.5 36.1-1.5 105.6s0.3 78.2 1.5 105.5c1.2 27.2 5.6 45.9 11.9 62.1 6.6 16.9 15.3 31.2 29.6 45.4 14.2 14.2 28.5 23 45.3 29.5 16.3 6.3 34.9 10.7 62.1 11.9 27.3 1.2 36 1.5 105.5 1.5s78.2-0.3 105.5-1.5c27.2-1.2 45.9-5.6 62.1-11.9 16.8-6.5 31.1-15.3 45.3-29.5s23-28.5 29.5-45.3c6.3-16.3 10.7-34.9 11.9-62.1 1.2-27.3 1.5-36 1.5-105.5s-0.3-78.2-1.5-105.5c-1.2-27.2-5.6-45.9-11.9-62.1-6.3-17-15-31.3-29.3-45.5-14.2-14.2-28.5-23-45.3-29.5-16.3-6.3-34.9-10.7-62.1-11.9-27.4-1.3-36.1-1.6-105.6-1.6v0z"></path>
                  <path d="M256 124.5c-72.6 0-131.5 58.9-131.5 131.5s58.9 131.5 131.5 131.5 131.5-58.9 131.5-131.5c0-72.6-58.9-131.5-131.5-131.5zM256 341.3c-47.1 0-85.3-38.2-85.3-85.3s38.2-85.3 85.3-85.3c47.1 0 85.3 38.2 85.3 85.3s-38.2 85.3-85.3 85.3z"></path>
                  <path d="M423.4 119.3c0 16.955-13.745 30.7-30.7 30.7s-30.7-13.745-30.7-30.7c0-16.955 13.745-30.7 30.7-30.7s30.7 13.745 30.7 30.7z"></path>
                </svg>
              </IconRRSS>
              <IconRRSS
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="512"
                  height="512"
                  viewBox="0 0 512 512"
                >
                  <title></title>
                  <g id="icomoon-ignore"></g>
                  <path d="M432 352c-22.58 0-42.96 9.369-57.506 24.415l-215.502-107.751c0.657-4.126 1.008-8.353 1.008-12.664s-0.351-8.538-1.008-12.663l215.502-107.751c14.546 15.045 34.926 24.414 57.506 24.414 44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80c0 4.311 0.352 8.538 1.008 12.663l-215.502 107.752c-14.546-15.045-34.926-24.415-57.506-24.415-44.183 0-80 35.818-80 80 0 44.184 35.817 80 80 80 22.58 0 42.96-9.369 57.506-24.414l215.502 107.751c-0.656 4.125-1.008 8.352-1.008 12.663 0 44.184 35.817 80 80 80s80-35.816 80-80c0-44.182-35.817-80-80-80z"></path>
                </svg>
              </IconRRSS>
            </ContainerRRSS>
            <Ubicacion>
              Ubicacion Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Ubicacion>
          </ContainerUbicacionRRSS>
          <ServiciosContainer>
            <h4>Servicios</h4>
            <Link to={"/servicios#parkin"}>Estacionamiento</Link>
            <Link to={"/servicios#bar"}>Bar</Link>
            <Link to={"/servicios#estacionamiento"}>Estacionamiento</Link>
            <Link to={"/servicios#serviceRoom"}>Servicio a la habitación</Link>
          </ServiciosContainer>
          <HabitacionesContainer>
            <h4>Habitaciones</h4>
            <Link to={"/habitacion-individual/"}>Individual</Link>
            <Link to={"/habitacion-doble/"}>Doble</Link>
            <Link to={"/habitacion-triple/"}>Triple</Link>
          </HabitacionesContainer>
        </ItemRight>
      </ItemsContainer>

      <ItemFooter>
        <a>Terminos y condiciones de uso</a>
        <a>Politica de privacidad</a>
        <a>Politica de cookies</a>
        <div>© {new Date().getFullYear()}, Es Tu HotelApartamento</div>
      </ItemFooter>
    </FooterStyled>
  )
}

export default Footer
