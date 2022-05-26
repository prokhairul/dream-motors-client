import React from 'react';
import khairul from '../../assets/images/khairul.png'

const Portfolio = () => {
    return (
        <div className='flex container justify-center my-32'>
            <div className="card lg:card-side bg-base-100 shadow-xl lg:w-8/12">
                <figure><img className='w-[350px]' src={khairul} alt="Album" /></figure>
                <div className="card-body">


                    <h2 className=""> <strong>Name:</strong> Md. Khairul Islam</h2>
                    <h2 className=""> <strong>Email: </strong> vakhairulislam@gmail.com</h2>
                    <h2 className=""> <strong>Website: </strong> khairulislam.com</h2>
                    <h2 className=""> <strong>Education: </strong> BSc in CSE (Dhaka International University)</h2>

                    <p className='text-[16px] mt-3 font-bold uppercase'>My Skills: </p>
                    <span>
                        <div className="badge badge-primary badge-outline mr-1">Javascript</div>
                        <div className="badge badge-primary badge-outline mr-1">React</div>
                        <div className="badge badge-primary badge-outline mr-1">Node Js</div>
                        <div className="badge badge-primary badge-outline mr-1">Mongodb</div>
                        <div className="badge badge-primary badge-outline mr-1">Express</div>
                        <div className="badge badge-primary badge-outline mr-1">Bootstrap</div>
                        <div className="badge badge-primary badge-outline mr-1">Tailwind</div>
                        <div className="badge badge-primary badge-outline mr-1">DaisyUi</div>
                    </span>

                    <p className='text-[16px] mt-3 font-bold uppercase'>My Awesome Projects: </p>

                    <div className="card-actions mt-2">
                        <a href="https://lifesstylesbarberacademy.com/" target="blank"><button className="btn btn-outline">Barber Academy</button></a>
                        <a href="https://vakhairul-assignment-9.netlify.app/" target="blank"><button className="btn btn-outline">Camera World</button></a>
                        <button className="btn btn-outline">Dream Motors</button>
                    </div>

                    <div className="card-actions mt-5 justify-end">
                        <a href="https://khairulislam.com/" target="blank"><button className="btn btn-accent">Hire Me</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;