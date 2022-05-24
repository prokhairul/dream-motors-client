import React from 'react';

const Review = ({ review }) => {

    return (
        <div className='container'>
            <div class="card w-100 shadow bg-base-100 border-t-4 border-accent">
                <figure><img className='w-52 mask mask-hexagon mt-2' src={review.img} alt="Shoes" /></figure>
                <div class="card-body text-center">
                    <h2 class="text-xl font-bold text-slate-900">
                        {review.name}
                    </h2>
                    <p>{review.description}</p>

                    <div class="card-actions justify-center">
                        <div class="badge badge-accent p-5 mt-5 text-white font-bold text-xl"> {review.star} Star </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;