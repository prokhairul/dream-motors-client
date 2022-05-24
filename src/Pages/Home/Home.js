import React from 'react';
import Banner from './Banner';
import Products from './Products';
import Reviews from './Reviews';
import Stats from './Stats';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Stats></Stats>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;