import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';


const Payment = () => {

    const { id } = useParams();
    const url = `https://gentle-hamlet-26508.herokuapp.com/order?/user${id}`;
    const { data: order, isLoading } = useQuery(['orders', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="card w-full max-w-md bg-base-100 shadow-xl my-12">

                <div className="card-body">
                    <p className="text-slate-900 font-bold text-xl">Hello, {order[1]?.name} </p>
                    <h2 className="card-title mb-2">Please Pay for {order[1]?._id} </h2>
                    <p>Your Total Products is: <span className='font-bold'>{order[1]?.quantity}</span> Piece {order?.name}</p>
                    <p>Please pay: <span className='font-bold'>${order[1]?.quantity * 120}</span> </p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <CheckoutForm order={order} />
                </div>
            </div>
        </div>
    );
};

export default Payment;