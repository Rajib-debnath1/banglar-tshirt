import React from 'react';
import Friend from '../Friend/Friend';

const Cosin = ({children ,hasFriend, ring}) => {
    return (
        <div>
            <h2>Cosin</h2>
            <p><small>{children}</small></p>
            { hasFriend && <Friend ring={ring}></Friend>}
        </div>
    );
};

export default Cosin;