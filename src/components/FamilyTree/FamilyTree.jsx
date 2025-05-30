import React, { createContext, useState } from 'react';
import './familyTree.css';
import Grandpa from './Grandpa';


export const AssetContext = createContext('');
export const MoneyContext = createContext(0);
const FamilyTree = () => {

    const [money, setMoney] = useState(0);

    const asset = 'Diamond'
    const newAsset = 'Gold'

    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            <h4>Total Money Asset: {money} </h4>
            <MoneyContext value={[money, setMoney]}>
                <AssetContext.Provider value={newAsset}>
                    <Grandpa asset={asset}></Grandpa>
                </AssetContext.Provider>
            </MoneyContext>

        </div>
    );
};

export default FamilyTree;