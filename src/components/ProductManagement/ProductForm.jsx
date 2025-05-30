import React, { useState } from 'react';

const ProductForm = ({ handleAddProduct }) => {
    const [error, setError] = useState('');

    const handleProductSubmit = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;

        // console.log(name, price, quantity);

        // Validation
        if (name.length === 0) {
            setError('Please Provide a Product Name')
            return
        }
        else if (price.length === 0) {
            setError('Please provide a product price')
            return
        }
        else if (price < 0) {
            setError('Product Price can not be less than 0')
            return
            // console.log('price negative');
        }
        else if (quantity.length === 0) {
            setError('Please provide a valid quantity')
            return
        }
        else if (quantity < 0) {
            setError('Product quantity can not be less than 0')
            return
        }
        else {
            setError('')
        }


        const newProduct = {
            name, price, quantity
        }

        handleAddProduct(newProduct)
    }

    return (
        <div>
            <h3>Add a Product</h3>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name='name' placeholder='Product Name' />
                <br />
                <input type="text" name='price' placeholder='Product Price' />
                <br />
                <input type="text" name='quantity' placeholder='Product Quantity' />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{ color: 'red' }}><small>{error}</small></p>

        </div>
    );
};

export default ProductForm;