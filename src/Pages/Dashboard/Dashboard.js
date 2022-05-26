import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);



    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content mt-10 ml-10">
                <h2 className='text-3xl font-bold text-slate-900 uppercase font-mono'>Hello, {user.displayName} It's Your Dashboard!</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-60 bg-slate-200 rounded text-slate-900 font-bold uppercase">
                    <li className='hover:bg-accent hover:text-white'><Link to="/dashboard">My Orders</Link></li>
                    <li className='hover:bg-accent hover:text-white'><Link to="/dashboard/review">Add A Review</Link></li>
                    <li className='hover:bg-accent hover:text-white'><Link to="/dashboard/history">My Profile</Link></li>
                    {!admin && <>
                        <li className='hover:bg-accent hover:text-white'><Link to="/dashboard/users">My Profile</Link></li>
                        <li className='hover:bg-accent hover:text-white'><Link to="/dashboard/addDoctor">Manage All Orders</Link></li>
                        <li className='hover:bg-accent hover:text-white'><Link to="/dashboard/manageDoctor">Manage Products</Link></li>
                        <li className='hover:bg-accent hover:text-white'><Link to="/dashboard/addProduct">Add A Product</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;