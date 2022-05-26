import React from 'react';

const TotalReview = ({ review }) => {

    return (
        <div className='container'>
            <div className="card w-100 shadow bg-base-100 border-t-4 border-accent">
                <figure><img className='w-52 mask mask-hexagon mt-2' src={review.img} alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <h2 className="text-xl font-bold text-slate-900">
                        {review.name}
                    </h2>
                    <p>{review.description}</p>

                    <div className="card-actions justify-center">
                        <div className="badge badge-accent p-5 mt-5 text-white font-bold text-xl"> {review.star} Star </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalReview;