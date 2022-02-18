import React from 'react'
import './NavBar.scss' /*se importa el archivo de estilos*/
import logonike from '../../img/icons/logonike.svg' /*importamos el logo desde su respectiva ruta y le ponemos un nombre*/
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
    </div>
  )
}
