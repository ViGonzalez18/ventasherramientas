import React from "react";
import Item from "./Item";

const Itemlist = () =>{
    return (
        <div>
            <h2>Lista de Productos</h2>
            <Item/>
        </div>
    );
}

function imprimirProductos (){
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            let productos = [
                {nombre:"Martillo", tipo : "Manual"},
                {nombre:"Destornillador", tipo : "Manual"},
                {nombre:"Sierra", tipo : "Eléctrica"}
            ] 
            if(productos.length===0){
                reject("No hay productos disponibles")
            }else{
                resolve(productos)
            }

        }, 2000);
    })
}

imprimirProductos()
.then((productos)=> {
    console.log(productos)
    return productos    
})
.then((productos) => {
    if(productos.length === 1){
       /*  console.log("Solo hay dos productos") */
       throw new Error("Error hay solo un producto")
    }else{
        console.log(productos)
    }

})
.catch((err)=>{
    console.log("Error con productos" + err)
})

export default Itemlist