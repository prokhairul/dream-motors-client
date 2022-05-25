import React from 'react';
import error from '../../assets/images/error.png'

const NotFound = () => {
    return (
        <div className='flex justify-center mb-[85px]'>
            <img src={error} alt="Page Not Found" />
        </div>
    );
};

export default NotFound;