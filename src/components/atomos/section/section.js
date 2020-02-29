import React from 'react'
import styled from 'styled-components'


const SectionStyled = styled.div`
    width: 100%;
    height: 100%;
    padding:16px;
`



const Section = (props) => {
  return (
    <SectionStyled>
      {props.children}
    </SectionStyled>
  )
}

export default Section
