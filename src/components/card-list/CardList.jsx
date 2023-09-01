import React from 'react'
import { useSelector } from 'react-redux'
import CardItem from '../card-item/CardItem';

const CardList = () => {

    const { todo } = useSelector((state) => state);
    console.log(todo)
  return (
    <>
        {todo.map((card) => {
            return (
                <CardItem key={card.id} card={card}/>
            )
        })}
    </>
  )
}

export default CardList