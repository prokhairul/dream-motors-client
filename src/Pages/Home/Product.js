import React from 'react';

const Product = ({ product }) => {

    return (
        <div className='container'>
            <div class="card w-100	 bg-base-100 shadow-xl border-t-4 border-gray-500">
                <figure><img className='w-52' src={product.img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                        {product.name}
                        <div class="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{product.description}</p>
                    <div class="card-actions justify-end">
                        <div class="badge badge-outline text-slate-600"> <strong>Min Qty : {product.min}</strong></div>
                        <div class="badge badge-outline text-green-600"><strong>Available : {product.available}</strong></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;