import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {

    const [products, setProduct] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))


    }, [])




    return (
        <div className='my-28 container'>
            <h2 className='text-center m-10 text-3xl uppercase font-bold text-headText'>Our Popular Product: </h2>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                {
                    products.slice(0, 4).map(product => <Product
                        key={product.name}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;