import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Purchase = () => {
    const { id } = useParams();
    const [product, setProducts] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    // React Hook Form Section 

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: order, isLoading } = useQuery('order', () => fetch('http://localhost:5000/order').then(res => res.json()))

    const onSubmit = async data => {

        const order = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            quantity: data.quantity,
            img: product.img
        }

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(order)

        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Purchase successfully')
                    reset();
                }
                else {
                    toast.error('Failed to Purchase');
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='flex container justify-center  my-32'>
            <div className="card lg:card-side bg-base-100 shadow-xl">

                <div>
                    <div>
                        <figure><img className='w-[350px]' src={product.img} alt="ProductImage" /></figure>
                    </div>

                    <div className="card-body items-start">
                        <h2 className=""> <strong>Product ID:</strong> {product._id}</h2>
                        <h2 className=""> <strong>Product Name:</strong> {product.name} </h2>
                        <h2 className=""> <strong>Price: </strong> ${product.price} <strong>/ Piece</strong></h2>
                        <h2 className=""> <strong>Minimum Quantity: </strong> {product.min} <strong>Piece</strong> </h2>
                        <h2 className=""> <strong>Available Stock: </strong> {product.available} <strong>Piece</strong> </h2>
                    </div>
                </div>


                {/* Purchase Product Form Start From Here  */}

                <div>
                    <div className='m-10'>
                        <h2 className="text-2xl mb-5 mt-5 font-bold uppercase text-accent"> Complete Purchase </h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input
                                    type="text"
                                    value={user?.displayName}
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Your Email Required'
                                        }

                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Your Email Address</span>
                                </label>
                                <input
                                    type="text"
                                    value={user?.email}
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Your Email Required'
                                        }

                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Your Phone Number</span>
                                </label>
                                <input
                                    type="tel"
                                    placeholder="Enter Your Phone"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("phone", {

                                    })}
                                />
                                <label className="label">
                                    {errors.phone?.phone === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Minimum Quantity"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("quantity", {
                                        min: 100,
                                        required: {
                                            value: true,
                                            message: 'You have to add minimum 100 products'
                                        },


                                    })}
                                />
                                <label className="label">
                                    {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.quantity.message}</span>}
                                </label>
                            </div>

                            <input className='btn btn-accent w-full max-w-xs text-white' type="submit" value="Add" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;