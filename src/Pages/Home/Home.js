import React from 'react';
import Banner from './Banner';
import Goals from './Goals';
import Products from './Products';
import Reviews from './Reviews';
import Stats from './Stats';
import Subscribe from './Subscribe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Goals></Goals>
            <Stats></Stats>
            <Reviews></Reviews>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;