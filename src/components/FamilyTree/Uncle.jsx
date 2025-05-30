import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <Cousin name={'Mozahid'}></Cousin>
            <Cousin name={'Jamil'}></Cousin>
            <Cousin name={'Jahin'}></Cousin>
        </div>
    );
};

export default Uncle;