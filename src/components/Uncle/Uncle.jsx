import React, { useContext } from 'react';
import Cosin from '../Cosin/Cosin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Uncle</h2>
            <p><small>grandpa money:{money}</small></p>
            <button onClick={()=>setMoney(money+1000)}>Send 1000tk</button>
            <section className='flex'>
            <Cosin>Nabil</Cosin>
            <Cosin>Nabila</Cosin>
            </section>
        </div>
    );
};

export default Uncle;