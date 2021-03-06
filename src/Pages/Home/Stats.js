import React from 'react';
import customer from '../../assets/icons/man.png';
import revenue from '../../assets/icons/money.png';
import review from '../../assets/icons/rating.png';
import product from '../../assets/icons/product.png';


const Stats = () => {
    return (
        <div>
            <h2 className='text-center mt-10 text-3xl uppercase font-bold text-stone-600'>Last One Year Growth </h2>
            <div className='container flex my-14'>
                <div className="stats stats-vertical lg:stats-horizontal mx-auto gap-x-20">
                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <img className='w-16' src={customer} alt="Customer Icon" />
                        </div>
                        <div className="stat-title">Customer</div>
                        <div className="stat-value text-accent">1K</div>

                    </div>

                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <img className='w-16' src={revenue} alt="Customer Icon" />
                        </div>
                        <div className="stat-title">Revenue</div>
                        <div className="stat-value text-accent">360M</div>

                    </div>
                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <img className='w-16' src={review} alt="Customer Icon" />
                        </div>
                        <div className="stat-title">Reviews</div>
                        <div className="stat-value text-accent">1650</div>

                    </div>
                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <img className='w-16' src={product} alt="Customer Icon" />
                        </div>
                        <div className="stat-title">Products</div>
                        <div className="stat-value text-accent">540+</div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;