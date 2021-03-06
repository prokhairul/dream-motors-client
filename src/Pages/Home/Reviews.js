import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Review from './Review';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://gentle-hamlet-26508.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='my-28 container'>
            <h2 className='text-center m-10 text-3xl uppercase font-bold text-headText'>What our Customers are saying: </h2>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                {
                    reviews.slice(0, 4).map(review => <Review
                        key={review.name}
                        review={review}
                    ></Review>)
                }
            </div>
            <div className='flex justify-center mt-10'>
                <Link to="/reviews"><button className="btn btn-wide btn-outline btn-accent uppercase font-bold text-xl">All Reviews</button></Link>
            </div>
        </div>
    );
};

export default Reviews;