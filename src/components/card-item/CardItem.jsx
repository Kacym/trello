import React from 'react'
import { styled } from 'styled-components'
import InnerTaskForm from '../inner-card-form/InnerTaskForm'

const CardItem = ({ card }) => {
  return (
    <StyledCardItem>
        <h3>{card.title}</h3>
        <InnerTaskForm/>
    </StyledCardItem>
  )
}

const StyledCardItem = styled.div`
    width: 272px;
    border: solid;
`

export default CardItem