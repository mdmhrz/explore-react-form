import React from 'react';
import Cousin from './Cousin';

const Aunt = ({ asset }) => {
    return (
        <div>
            <h2>Aunt</h2>
            <Cousin name='Mahadi'></Cousin>
            <Cousin asset={asset} name='JoJo'></Cousin>
        </div>
    );
};

export default Aunt;