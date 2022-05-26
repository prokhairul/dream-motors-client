import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const Review = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { data: reviews, isLoading } = useQuery('product', () => fetch('https://gentle-hamlet-26508.herokuapp.com/review').then(res => res.json()))
    const imageStorageKey = '7faee02826d0b964d21ea59d5bcae4d1';

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const review = {
                        name: data.name,
                        description: data.description,
                        star: data.star,
                        img: img
                    }

                    fetch('https://gentle-hamlet-26508.herokuapp.com/review', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(review)

                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Your Review added successfully')
                                reset();
                            }
                            else {
                                toast.error('Failed to add the Review');
                            }
                        })
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-2xl mb-5 mt-5 font-bold uppercase text-accent">Add a New Review </h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Review Content</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Type Here"
                        className="input input-bordered w-full max-w-xs"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'Content is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Star</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Review Value"
                        className="input input-bordered w-full max-w-xs"
                        {...register("star", {
                            required: {
                                value: true,
                                message: 'Review Value is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.star?.type === 'required' && <span className="label-text-alt text-red-500">{errors.star.message}</span>}
                    </label>
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your Photo</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.img?.type === 'required' && <span className="label-text-alt text-red-500">{errors.img.message}</span>}
                    </label>
                </div>

                <input className='btn btn-accent w-full max-w-xs text-white' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default Review;