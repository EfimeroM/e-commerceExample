import React from 'react'

export const Item = ({title, description, price, imgUrl, stock}) => {
  return (
    <div className='item'>
        <div className='title'>{title}</div>
        <img src={imgUrl} alt={title} />
        <div className='description'>{description}</div>
        <button>Ver detalles del producto</button>
        <div className='stock'>precio: ${price}</div>
    </div>
  )
}
