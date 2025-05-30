import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section>
                <Cousin name={'Mozahid'}></Cousin>
                <Cousin name={'Jamil'}></Cousin>
                <Cousin name={'Jahin'}></Cousin>
            </section>

        </div>
    );
};

export default Uncle;