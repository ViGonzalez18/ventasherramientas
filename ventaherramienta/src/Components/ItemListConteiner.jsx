import React, { useState } from "react";
import Itemlist from './Itemlist';

const ItemListConteiner = () => {
    const [item, setItem] = useState([]);
 
    useEffect(
        fetch('https://6231328805f5f4d40d754a4f.mockapi.io/productos')
        .then(Response => {
             return Response.json();
        })
        .then(Response => {
            setItem(Response);
        })
     
 
    ,[]);
 
    if(item.length===1 ){
        return <h2>Cargando ...</h2>
 
    }
 
    return(
        <>
         <ItemDetail item={item}/>
        </>
    )
 
 }
 
 export default ItemListConteiner