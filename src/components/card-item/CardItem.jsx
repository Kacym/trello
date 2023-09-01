import React from 'react'
import { styled } from 'styled-components'

const CardItem = ({ card }) => {
  return (
    <StyledCardItem>
        <h3>{card.title}</h3>
    </StyledCardItem>
  )
}

const StyledCardItem = styled.div`
    
`

export default CardItem