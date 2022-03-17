import React from "react";
import Item from "./Item";

const Itemlist = ({productos}) =>{
    return (
        <div>
            <h2>Lista de Productos</h2>
            {productos.map( product => < Item product={product}/>)}
        </div>
    );
}


export default Itemlist