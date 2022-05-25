import React from 'react';
import { Link } from 'react-router-dom';

const Subscribe = () => {
    return (
        <div>
            <div class="min-h-max bg-base-200">
                <div class="flex container items-center justify-around ">
                    <div class="text-left m-10">
                        <h1 class="text-5xl font-bold">FIND OUT FIRST</h1>
                        <p className='pt-2 text-xl'>Don't miss out on new products and events.</p>
                    </div>


                    <div className='flex '>
                        <input type="text" placeholder="name@site.com" class="input input-bordered w-full pr-16" />
                        <Link to="#"><button class="btn btn-accent ml-2">Subscribe</button></Link>

                    </div>

                </div>
            </div>
        </div>


    );
};

export default Subscribe;