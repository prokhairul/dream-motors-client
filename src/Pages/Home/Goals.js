import React from 'react';
import { Link } from 'react-router-dom';
import bike from '../../assets/images/bike.png'

const Goals = () => {
    return (
        <div className='mb-20'>
            <div className="min-h-max bg-yellow-400">
                <div className="grid grid-cols gap-4 container items-center">
                    <div className='lg:col-start-1 lg:col-end-3'>
                        <h1 className="text-5xl font-bold text-slate-900">Our History</h1>
                        <p className="py-6 w-10/12 text-xl"> Riding has always been about breaking free. As a band of renegades out to ride the road on our own terms, we take that idea seriously. That means a healthy respect for tradition but also the need to forge our own path. It means crafting components so every rider can escape conformity. And most of all, it means precision engineering that elevates both the form and function of the riding experience as we deliver world-class performance motorcycle parts and accessories. Dream Motors has been a pretty quiet, heads down working company. We’ve stayed quietly to the periphery of the Harley-Davidson™ scene... </p>
                        <Link to="/about"><button className="btn btn-accent">Read More</button></Link>
                    </div>

                    <div className='lg:col-end-7 lg:col-span-2'>
                        <img src={bike} className="max-w-sm rounded-lg mt-7 mb-5" alt='Bike' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Goals;