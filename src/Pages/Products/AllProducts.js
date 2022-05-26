import React, { useEffect, useState } from 'react';
import AllProduct from './AllProduct';

const Products = () => {

    const [products, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://gentle-hamlet-26508.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProduct(data))


    }, [])

    return (
        <div className='my-28 container'>
            <h2 className='text-center m-10 text-3xl uppercase font-bold text-stone-600'>Our Exclusive Products </h2>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                {
                    products.map(product => <AllProduct
                        key={product.name}
                        product={product}
                    ></AllProduct>)
                }
            </div>
        </div>
    );
};

export default Products;