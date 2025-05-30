import React, { createContext } from 'react';
import './familyTree.css';
import Grandpa from './Grandpa';


export const AssetContext = createContext('');

const FamilyTree = () => {

    const asset = 'Diamond'
    const newAsset = 'Gold'

    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            <AssetContext.Provider value={newAsset}>
                <Grandpa asset={asset}></Grandpa>
            </AssetContext.Provider>

        </div>
    );
};

export default FamilyTree;