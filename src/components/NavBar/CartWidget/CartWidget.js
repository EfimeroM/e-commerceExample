import React from 'react'
import './CartWidget.scss'
import cartIcon from '../../../img/icons/cart.png' //importamos el icono del carrito

export const CartWidget = () => {
  return (
    <div id='cart-widget'>
        <div id='icon-cart'>
            <img src={cartIcon} />
        </div>
    </div>
  )
}
