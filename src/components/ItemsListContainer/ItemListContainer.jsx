import React, { useEffect, useState } from 'react'
import { stock } from '../../data/stock'
import { listarArray } from '../helpers/listarArray'
import { ItemList } from './ItemList'
import './ItemListContainer.scss'
export const ItemListContainer = () => {

    const [items, setItems] = useState([]) //en esta variable de estado vamos a guardar los productos, la inicializamos como un array poniendole los corchetes []
    const [loading, setLoading] = useState(false) //declaramos la variable de loading estado para controlar nuestra pantalla de carga, su valor inicial va a ser false

    useEffect(() => {
        setLoading(true) //se cambia el valor a true para que muestre "cargando" mientras se espera la respues de la promise
        listarArray(stock) //llamamos a nuestra funcion para que nos traiga el listado de productos
        .then((res) =>{
            //al recibir respuesta guardamos lo obtenido en nuestra variable de estado items, mediante la funcion setItems
            setItems(res)
        })
        .catch((err)=>console.log(err)) //en caso de que haya un error este mismo se va a visualizar en la consola
        .finally(()=>{
            //al finalizar la peticion cambiamos el valor a false de loading para que se muestre nuestro listado de productos
            setLoading(false)
        })
    }, [])

  return (
    <div className='item-list-container'>
        {
            loading? //si loading es true muestra "cargando..." , sino muestra el listado de productos
            <div className='cargando'>Cargando...</div>
            :
            <ItemList items={items} />
        }
    </div>
  )
}
