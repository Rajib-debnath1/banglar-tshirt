import React from 'react';
import Cosin from '../Cosin/Cosin';

const Aunty = ({ring}) => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className='flex'>
                <Cosin>Abir</Cosin>
                <Cosin hasFriend={true} ring={ring}>Abira</Cosin>
            </section>
        </div>
    );
};

export default Aunty;