import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({id, title, description, price, imgUrl, stock}) => {
  return (
    <div className='item'>
        <div className='title'>{title}</div>
        <img src={imgUrl} alt={title} />
        <div className='description'>{description}</div>
        <Link to={`/item/${id}`} className='link'><button>Ver detalles del producto</button></Link> {/*Pasamos por parametro el id del producto*/ }
        <div className='stock'>precio: ${price}</div>
    </div>
  )
}
