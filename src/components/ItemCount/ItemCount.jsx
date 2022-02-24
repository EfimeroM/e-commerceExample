import React, { useState } from 'react'

export const ItemCount = ({stock, initial, onAdd}) => {

    const [cantidad, setCantidad] = useState(initial) //declaramos nuestra variable de estado con el valor inicial
 
    const handleRestar = () => {
        if(cantidad > 0){
            setCantidad(cantidad-1) //hacemos uso de nuestra funcion setCantidad para modificar la variable de estado 'cantidad'
        } 
    }
    const handleSumar = () => {
        if(cantidad < stock){
            setCantidad(cantidad+1) //hacemos uso de nuestra funcion setCantidad para modificar la variable de estado 'cantidad'
        } 
    }
    

    return (
        <div>
            <button disabled={cantidad===0} onClick={handleRestar} className="btn btn-secondary">
                -
            </button>
            <span className="mx-3">{cantidad}</span>
            <button disabled={cantidad===stock} onClick={handleSumar} className="btn btn-secondary">
                +
            </button>
            <button disabled={cantidad===0} onClick={ () => onAdd(cantidad) } className="btn btn-primary mx-2">
                Agregar al carrito
            </button>
        </div>
    )
}
