import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';

const Home = () => {
    const [] = useState([]);
    const tshirts = useLoaderData();

    const handleAddToCart = tshirt =>{
        console.log(tshirt)
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
                <Cart></Cart>
           </div>
        </div>
    );
};

export default Home;