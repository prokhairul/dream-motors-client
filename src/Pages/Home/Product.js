import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {

    const { _id } = product;
    const navigate = useNavigate();

    const navigateToPurchase = id => {
        navigate(`/purchase/${id}`);
    }

    return (
        <div className='container'>
            <div className="card w-100	 bg-base-100 shadow-xl border-t-4 border-accent">
                <figure><img className='w-52' src={product.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {product.name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{product.description}</p>
                    <div className="card-actions justify-start mt-5">
                        <div className="badge badge-neutral text-slate-600"> <strong>Min Qty : {product.min}</strong></div>
                        <div className="badge badge-neutral text-slate-600"><strong>Available : {product.available}</strong></div>
                        <button onClick={() => navigateToPurchase(_id)} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-xl btn-accent text-white font-bold mt-5">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;