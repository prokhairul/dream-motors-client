import React from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import auth from '../../firebase.init';
import logoutIcon from '../../assets/icons/logout.png'

const Header = () => {

    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    const liItems = <>
        <li className='hover:bg-accent rounded-bl rounded-tr'> <Link to="/">Home</Link></li>
        <li className='hover:bg-accent rounded-bl rounded-tr'><Link to="/allProducts">Products</Link></li>
        <li className='hover:bg-accent rounded-bl rounded-tr'><Link to="/blogs">Blogs</Link></li>
        <li className='hover:bg-accent rounded-bl rounded-tr'><Link to="/about">About Us</Link></li>
        <li className='hover:bg-accent rounded-bl rounded-tr'><Link to="/portfolio">Portfolio</Link></li>
        {
            user && <li className='hover:bg-accent rounded-bl rounded-tr'><Link to="/dashboard">Dashboard</Link></li>
        }
        {
            !user && <li className='hover:bg-accent rounded-bl rounded-tr'><Link to="/signup">Register</Link></li>
        }
        <li className='hover:bg-accent rounded-bl rounded-tr '>{user ? <button className="btn btn-accent rounded-bl rounded-tr hover:bg-accent border-0 ml-2" onClick={logout} >{user.displayName} <img src={logoutIcon} alt="Logout" /></button> : <Link to="/login">Login</Link>}</li>
    </>

    return (
        <div class="navbar bg-gray-900">
            <div class="navbar-start ">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 16 16" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {liItems}
                    </ul>
                </div>
                <Link to="/" class="btn btn-ghost normal-case text-xl"> <img src={logo} /></Link>
            </div>

            <div class="navbar-end pr-6 hidden lg:flex">
                <ul class="menu menu-horizontal p-0 text-white font-sans antialiased uppercase font-medium ">
                    {liItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;