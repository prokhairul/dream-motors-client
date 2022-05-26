import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TotalReview from './TotalReview';

const TotalReviews = () => {

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
                    reviews.reverse().map(review => <TotalReview
                        key={review.name}
                        review={review}
                    ></TotalReview>)
                }
            </div>
        </div>
    );
};

export default TotalReviews;