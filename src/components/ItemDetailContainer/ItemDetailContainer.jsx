import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { stock } from '../../data/stock'
import { getStock } from '../helpers/getStock'
import { ItemDetail } from './ItemDetail'
import './ItemDetailContainer.scss'

export const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(false)
    const {idItem} = useParams() //Recibimos nuestro valor idItem por parametro

    useEffect(() => {
        setLoading(true)
        getStock(stock) //llamamos a nuestra funcion para que nos traiga el listado de productos
            .then((res) =>{
                //al recibir respuesta guardamos lo obtenido en nuestra variable de estado item, mediante la funcion setItem
                setItem(res.find( (item)=> item.id === parseInt(idItem) )) //buscamos dentro de nuestro objeto el item con id igual al id extraido por parametro
            })
            .catch((err)=>console.log(err)) //en caso de que haya un error este mismo se va a visualizar en la consola
            .finally(()=>{
                //al finalizar la peticion cambiamos el valor a false de loading para que se muestre nuestro listado de productos
                setLoading(false)
            })
    }, [idItem])
    
  return (
    <div className='item-detail-container'>
        {
            loading? //si loading es true muestra "cargando..." , sino muestra el listado de productos
            <div className='cargando'>Cargando...</div>
            :
            <ItemDetail {...item}/>
        }
    </div>
  )
}
