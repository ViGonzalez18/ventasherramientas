import React from 'react'
import { useState } from 'react';

export const ItemCounter = ({stock, initial,onAdd}) => {
    const [contador,setContador] = useState(initial)
    const sumar = () => {
        if(contador < stock)
         setContador(contador + 1 )
    }
    const restar = () => {
        if(contador > 0){
            setContador (contador - 1)
        }
        
    }

  return (
   
        <div>
        <button onClick={restar}>-</button>
        <span>{contador}</span>
        <button onClick={sumar}>+</button>
        </div>
        
    
  )
}

export default ItemCounter;