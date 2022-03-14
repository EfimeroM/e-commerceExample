import React from 'react'
import './NavBar.scss' /*se importa el archivo de estilos*/
import logonike from '../../img/icons/logonike.svg' /*importamos el logo desde su respectiva ruta y le ponemos un nombre*/
import { CartWidget } from './CartWidget/CartWidget' //importamos nuestro componente CartWidget
import { Link } from 'react-router-dom'
export const NavBar = () => {

    return (
        <div id='navBar'>
            <Link to={`/`} id='brand'>
                <img className='logo' src= {logonike} />
            </Link>
            <div id='nav'>
                <ul>
                    <Link to={`/`} className='link'><li>Inicio</li></Link>
                    <li className='link'>
                        <Link to={`/`} className='title-sub-menu'>Productos</Link>
                        <ul className='sub-menu-box'>
                            <Link to={`/category/zapatillas`} className='sub-menu'><li>Zapatillas</li></Link>
                            <Link to={`/category/remeras`} className='sub-menu'><li>Remeras</li></Link>
                            <Link to={`/category/buzos`} className='sub-menu'><li>Buzos</li></Link>
                            <Link to={`/category/camperas`} className='sub-menu'><li>Camperas</li></Link>
                        </ul>
                    </li>
                    <li><Link to={`/`} className='link'>Perfil</Link></li>
                    <li><Link to={`/`} className='link'>Servicios</Link></li>
                    <li><Link to={`/`} className='link'>Acerca de</Link></li>
                </ul>
            </div>
            <CartWidget /> {/*Notar que NavBar esta divido en 3 secciones: brand, nav y CartWidget*/} 
        </div>
    )
}
