import React, { use } from 'react';
import Cousin from './Cousin';
import { MoneyContext } from './FamilyTree';

const Aunt = ({ asset }) => {
    const [money, setMoney] = use(MoneyContext)

    const handleAddMoney = () => {
        setMoney(money + 5000)
    }
    return (
        <div>
            <h2>Aunt</h2>
            <section>
                <Cousin name='Mahadi'></Cousin>
                <Cousin asset={asset} name='JoJo'></Cousin>
                <button onClick={handleAddMoney} >Add 5000Tk</button>
            </section>
        </div>
    );
};

export default Aunt;