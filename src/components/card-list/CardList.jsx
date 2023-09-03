import React from 'react'
import { useSelector } from 'react-redux'
import CardItem from '../card-item/CardItem';
import { styled } from 'styled-components';

const CardList = () => {

    const { todo } = useSelector((state) => state);
    console.log(todo)
  return (
    <StyledCardList>
        {todo.map((card) => {
            return (
                <CardItem key={card.id} card={card}/>
            )
        })}
    </StyledCardList>
  )
}

const StyledCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  border: solid;
`

export default CardList