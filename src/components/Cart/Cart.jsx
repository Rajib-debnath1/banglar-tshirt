import React from 'react';

const Cart = ({cart,handleRemoveFromCart}) => {
    let message;
    if(cart.length===0){
        message = <p>Please add some products</p>
    }
    else{
        message = <div>
            <h3>Bolrloxx</h3>
            <p><small>Thanks for giving your money</small></p>
        </div>
    }

    return (
        <div>
            <h2>Order Summery: {cart.length}</h2>
             {cart.length > 2 ? <span>Aro kino</span> : <span>fokira</span>}
            {message}
            {
                cart.map(tshirt=> <p
                key={tshirt._id}
                >{tshirt.name} <button onClick={()=>handleRemoveFromCart(tshirt._id)}>X</button></p>)
            }
        </div>
    );
};

export default Cart;