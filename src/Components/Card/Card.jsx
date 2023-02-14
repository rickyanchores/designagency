import React from 'react'

const Card = (card) => {
  return (
    <div className='Card'>
        <img src={card.image} alt="" />
        <h3>{card.name}</h3>
        <p>{card.role}</p>
    </div>
  )
}

export default Card;