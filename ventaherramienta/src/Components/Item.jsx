import React, { useState } from "react";
import ItemCounter from "./ItemCounter";

const Item = ({product}) => {
const [show,setShow]=useState(false)   

const verMas = () =>{
    console.log(show)
    setShow(!show)
}
const onAdd = () => {
    console.log('agregado')
}
   
    return (
        <>
        <div>
            <p>{product.name}</p>
            <p>Precio: {product.name}</p>
            <img src= {product.foto}/>
            {show && <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quas nisi odit earum tempore error, quis assumenda exercitationem ullam iure alias maiores eligendi, nam tenetur ab soluta molestias laborum doloribus!</p>}
            <button onClick={verMas}>{show ? 'Ver menos': 'Ver más'}</button>
            <ItemCounter stock={product.stock} initial={1} onAdd={onAdd}/>
        </div>
        <button onClick={onAdd}> sumar al carrito</button>
        </>
    )
}

export default Item;