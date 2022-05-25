import React from 'react';
import { Link } from 'react-router-dom';
import bannerbg from '../../assets/images/banner-bg.webp'

const Banner = () => {
    return (
        <div style={{
            background: `url(${bannerbg})`,
            backgroundSize: 'cover',

        }} class="hero lg:min-h-screen bg-base-200">
            <div class="container flex-col lg:flex-row-reverse">
                <div className='px-2'>
                    <h2 className='font-sans font-bold lg:text-3xl text-2xl text-rose-500 mb-5'>LOWRIDER'S</h2>
                    <h1 class="lg:text-7xl text-5xl font-bold text-white tracking-widest">GAUGE</h1>
                    <h1 class="lg:text-7xl text-5xl font-bold text-white tracking-widest" >BUCKET</h1>
                    <p class="py-6 lg:w-6/12 text-white text-xl leading-relaxed">The DM Lowrider's Gauge Bucket allows you relocate the stock gauge to a more visible and ergonomic position. This beautifully machined piece encases your stock Harley gauges and mounts in a variety of different ways.</p>
                    <Link to="/products"><button class="btn btn-accent text-white font-bold">Purchase Now</button> </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;