import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';
import { toast } from 'react-toastify';

const Home = () => {
    const [cart, setCart] = useState([]);
    const tshirts = useLoaderData();

    const handleAddToCart = tshirt =>{
        const exists = cart.find(ts => ts._id ===tshirt._id)
        if(exists){
            toast('You have already added this t-shirt')
        }
        else{
            const newCart = [...cart, tshirt]
        setCart(newCart);

        }
        
    }

    const handleRemoveFromCart = id =>{
        const remining = cart.filter(ts => ts._id !== id)
        setCart(remining);
    }

    return (
        <div className='home-container'>
           <div className='t-shirt-container'>
           {
            tshirts.map(tshirt =><Tshirt
                key={tshirt._id}
                tshirt = {tshirt}
                handleAddToCart = {handleAddToCart}
            ></Tshirt>)
           }
           </div>
           <div className='cart-container'>
                <Cart cart ={cart}
                handleRemoveFromCart = {handleRemoveFromCart}
                
                ></Cart>
           </div>
        </div>
    );
};

export default Home;