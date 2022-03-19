import React from "react";
import Item from "./Item";

const Itemlist = ({productos}) => {
    if(!productos){
        return <h2>No hay productos disponibles</h2>
    }
 
    return (
        <div>
            <h2>Lista de productos</h2>
            {productos.map( (producto,key)=> <Item key={key} product ={producto}/>)}
        </div>
    );

}

export default Itemlist;