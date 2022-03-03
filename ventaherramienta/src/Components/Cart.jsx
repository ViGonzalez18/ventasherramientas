import React from 'react';
import carrito from './carrito.jpg';

const Cart = () =>{
    return (
        <div>
        <img src={carrito} alt="" width="500" height="200" class="d-inline-block align-text-top"/> 
        </div>
    );
}

export default Cart;