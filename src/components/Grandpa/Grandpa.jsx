import React, { createContext } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css';

export const RingContext = createContext('gold')

const Grandpa = () => {
    const ring = "Diamond";
    return (
        
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <RingContext.Provider value='golden Ring'>
            <section className='flex'>
                <Father ring={ring}></Father>
                <Uncle></Uncle>
                <Aunty ring={ring}></Aunty>
            </section>
            </RingContext.Provider>
        </div>
    );
};

export default Grandpa;