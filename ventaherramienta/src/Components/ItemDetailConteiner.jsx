import React, { useEffect, useState } from "react";
import ItemDetail from './ItemDetail';

const ItemDetailConteiner = () => {
   const [item, setItem] = useState([]);

   useEffect(
       fetch('https://6231328805f5f4d40d754a4f.mockapi.io/productos')
       .then(Response => {
            return Response.json();
       })
       .then(Response => {
           setItem(Response.filter( i => i.id === 1 ));
       })
    

   ,[]);

   if(item.length===0 ){
       return <h2>Cargando ...</h2>

   }

   return(
       <>
        <ItemDetail item={item}/>
       </>
   )

}

export default ItemDetailConteiner