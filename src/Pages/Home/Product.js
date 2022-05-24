import React from 'react';

const Product = ({ product }) => {

    return (
        <div className='container'>
            <div class="card w-100	 bg-base-100 shadow-xl border-t-4 border-accent">
                <figure><img className='w-52' src={product.img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                        {product.name}
                        <div class="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{product.description}</p>
                    <div class="card-actions justify-start mt-5">
                        <div class="badge badge-neutral text-slate-600"> <strong>Min Qty : {product.min}</strong></div>
                        <div class="badge badge-neutral text-slate-600"><strong>Available : {product.available}</strong></div>
                        <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-xl btn-accent text-white font-bold mt-5">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;