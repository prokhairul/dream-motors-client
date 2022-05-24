import React from 'react';
import logo from '../../assets/images/logo.png'

const Header = () => {

    const liItems = <>
        <li className='hover:bg-gray-600 rounded-bl rounded-tr'><a>Home</a></li>
        <li className='hover:bg-gray-600 rounded-bl rounded-tr'><a>About Us</a></li>
        <li className='hover:bg-gray-600 rounded-bl rounded-tr'><a>Blogs</a></li>
        <li className='hover:bg-gray-600 rounded-bl rounded-tr'><a>Register</a></li>
        <li className='hover:bg-gray-600 rounded-bl rounded-tr'><a>login</a></li>
    </>

    return (
        <div class="navbar bg-gray-900">
            <div class="navbar-start pl-6">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 16 16" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {liItems}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl"> <img src={logo} /></a>
            </div>

            <div class="navbar-end pr-6 hidden lg:flex">
                <ul class="menu menu-horizontal p-0 text-white font-sans antialiased uppercase font-medium">
                    {liItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;