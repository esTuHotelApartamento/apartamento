import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import styled from "styled-components"

const ItemSection = styled.div`
  width: 100%;
  margin: 0px;
  display: flex;
  @media (max-width: 700px) {
    display: block;
  }

`
const Section = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: -30px;
  ${ItemSection}:nth-child(even) {
    flex-direction: row-reverse;
  }

`
const ImgSection = styled.img`
  max-height: 700px;
  width: 50%;
  @media (max-width: 700px) {
    width: 100%;
  }
`
const DescServiceContainer = styled.div`
  width: 50%;
  padding: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    width: 100%;
  }
`
const TitleDesService = styled.h3`
  margin: 4px 0px 16px;
  font-size: 42px;
  text-align: center;
` 
const TextDesService = styled.p``

const ServiciosPage = () => (
  <>
    <SEO title="Pagina de servicios" />
    <Section>
      <ItemSection>
        <ImgSection src="/servicios/parking.jpg" />
        <DescServiceContainer>
          <TitleDesService>Parking</TitleDesService>
          <TextDesService>
          El aparcamiento cuenta con unas instalaciones muy cuidadas, plazas amplias y bien iluminado. Encontrarás todos los servicios necesarios para tu vehículo incluído plazas para carga de coche eléctrico.
          Excelentemente comunicado con las principales vías y carreteras de acceso.
          </TextDesService>
        </DescServiceContainer>
      </ItemSection>
      <ItemSection>
        <ImgSection src="/servicios/salon_de_reuniones_fomal.jpg" />
        <DescServiceContainer>
          <TitleDesService>Alquiler de salas </TitleDesService> 
        
          <TextDesService>
            LEn nuestra web te ofrecemos un listado de salas y espacios en alquiler por horas que podrás reservar directamente de forma online con la confirmación del propio gestor de la sala. Todos los precios de las salas, ya sean para salas de reuniones, aulas de formación u otro tipo de espacios de trabajo como por ejemplo, para realizar actividades de yoga y meditación.
          </TextDesService>
        </DescServiceContainer>
      </ItemSection>
      <ItemSection>
        <ImgSection src="/servicios/SalonMarca.jpg" />
        <DescServiceContainer>
          <TextDesService>
          Encuentra todos los espacios disponibles para celebrar eventos, conferencias y presentaciones.

          </TextDesService>
        </DescServiceContainer>
      </ItemSection>
      <ItemSection>
        <ImgSection src="/servicios/bar.jpg" />
        <DescServiceContainer>
          <TitleDesService>Bar</TitleDesService>
          <TextDesService>
           Abierto los 7 días de la semana con DJ en vivo los fines de semana y noches de eventos especiales durante todo el año. Ofreciendo una variedad de bebidas en un ambiente relajado y de moda, el bar está perfectamente ubicado entre la ecléctica colección de lugares a lo largo de Canal Street.
          </TextDesService>
        </DescServiceContainer>
      </ItemSection>
      <ItemSection>
        <ImgSection src="/servicios/entregaHabitacion.jpg" />
        <DescServiceContainer>
          <TitleDesService>Servicio a la habitación</TitleDesService>
          <TextDesService>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
            iure laboriosam accusamus est architecto consectetur, ratione
            aperiam corrupti fugiat, tempora incidunt temporibus itaque sequi
            sit repellendus aliquam doloremque eaque nesciunt?
          </TextDesService>
        </DescServiceContainer>
      </ItemSection>
    </Section>
  </>
)

export default ServiciosPage
