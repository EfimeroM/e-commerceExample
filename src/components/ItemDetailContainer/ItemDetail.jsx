import React from 'react'

export const ItemDetail = ({title, description, price, imgUrl, stock}) => {
  return (
    <div className='item-detail'>
        <div className='portada'>
            <img src={imgUrl} alt={title} />
        </div>
        <div className='detail'>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <h2>${price}</h2>
        </div>
    </div>
  )
}
