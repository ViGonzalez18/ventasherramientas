import React from "react";

const ItemDetailConteiner = () => {
    return(
        fetch('https://6231328805f5f4d40d754a4f.mockapi.io/productos')
        .then(Response => {
            return Response.json();
        })
        .then(Response => {
            


        })

    )

}

export default ItemDetailConteiner