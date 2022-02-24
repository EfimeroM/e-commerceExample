import React from 'react'
import './NavBar.scss' /*se importa el archivo de estilos*/
import logonike from '../../img/icons/logonike.svg' /*importamos el logo desde su respectiva ruta y le ponemos un nombre*/
import { CartWidget } from '../CartWidget/CartWidget' //importamos nuestro componente CartWidget
export const NavBar = () => {
  return (
    <div id='navBar'>
        <div id='brand'>
          <img className='logo' src= {logonike} />
        </div>
        <div id='nav'>
            <ul>
                <li>Inicio</li>
                <li>Mis productos</li>
                <li>Perfil</li>
                <li>Servicios</li>
                <li>Acerca de</li>
            </ul>
        </div>
        <CartWidget /> {/*Notar que NavBar esta divido en 3 secciones: brand, nav y CartWidget*/} 
    </div>
  )
}
