import React from 'react'
import { styled } from 'styled-components'
import Header from '../../components/header/Header'

const TrelloPage = () => {
  return (
    <StyledTrelloPage>
      <Header/>
      <h1>Trello</h1>
    </StyledTrelloPage>
  )
}

const StyledTrelloPage = styled.div`
  
`

export default TrelloPage