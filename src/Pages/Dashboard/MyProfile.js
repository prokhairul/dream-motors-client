import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {

    const [user] = useAuthState(auth);

    return (
        <div>
            <div className='flex container justify-start my-32'>
                <div className="card lg:card-side bg-base-100 shadow-xl lg:w-8/12">
                    <div className="card-body ">
                        <h2 className="text-2xl font-serif"> <strong>Name:</strong> {user?.displayName} </h2>
                        <h2 className="text-2xl font-serif"> <strong>Email: </strong> {user?.email} </h2>
                        <div className="card-actions mt-5 ">
                            <input type="text" placeholder="Enter Your Name" className="input input-bordered w-full max-w-xs" />
                            <a href="#"><button className="btn btn-accent">Update Profile</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;