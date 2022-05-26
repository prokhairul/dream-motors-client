import React from 'react';
import { Link } from 'react-router-dom';

const Subscribe = () => {
    return (
        <div>
            <div className="min-h-max bg-base-200">
                <div className="flex container items-center justify-around ">
                    <div className="text-left m-10">
                        <h1 className="text-5xl font-bold">FIND OUT FIRST</h1>
                        <p className='pt-2 text-xl'>Don't miss out on new products and events.</p>
                    </div>


                    <div className='flex '>
                        <input type="text" placeholder="name@site.com" className="input input-bordered w-full pr-16" />
                        <Link to="#"><button className="btn btn-accent ml-2">Subscribe</button></Link>

                    </div>

                </div>
            </div>
        </div>


    );
};

export default Subscribe;