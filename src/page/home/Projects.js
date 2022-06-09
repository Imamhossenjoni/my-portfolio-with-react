import React from 'react';
import dashboard from '../../images/Untitled.png'
import order from '../../images/booking.png'
import laptop from '../../images/laptop-gallary.png'

const Projects = () => {
    return (
        <div className='mt-4 px-12'>
            <p className='text-accent text-center text-4xl text-bold '>My Projects</p>
            <div className='mt-2'>
                <div>
                    <div class="hero  bg-base-200">
                        <div class="hero-content flex-col lg:flex-row">
                            <img src={dashboard} alt='' class="max-w-sm rounded-lg shadow-2xl" />
                            <div className=' ms-2'>
                                <h1 class="text-2xl font-bold">Laptop Parts Gallary</h1>
                                <li>This is a Complete Responsive Website. Users will be able to order for servicing of different types of devices</li>
                                <li>Users need to log in to the website to place an order</li>
                                <li>Users of this website can give reviews if their order is completed</li>
                                <li>Website admin can add new services if they want</li>
                                <h2 className='text-primary text-bold text-2xl'>Technology:</h2>
                                <p className=''>HTML,CSS,Tailwind,Heroku,Firebase,Node js,Express js,Mongodb</p>
                                <a className='btn btn-primary mt-3' href='https://laptop-parts-gallary.web.app/' >Live Preview</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* another */}

                <div className='mt-3'>
                    <div class="hero  bg-base-200 ">
                        <div class="hero-content flex-col lg:flex-row ">
                            <img src={order} alt='' class="max-w-sm rounded-lg shadow-2xl" />
                            <div className=' ms-2'>
                                <h1 class="text-2xl font-bold">Laptop Gallary</h1>
                                <li>This is a Complete Responsive Website. Users will be able to order for servicing of different types of devices</li>
                                <li>Users need to log in to the website to place an order</li>
                                <li>Users of this website can give reviews if their order is completed</li>
                                <li>Website admin can add new services if they want</li>
                                <h2 className='text-primary text-bold text-2xl'>Technology:</h2>
                                <p className='text-2xl'>HTML,CSS,Tailwind,Daisy UI,React Router,Heroku,Mongo DB</p>
                                <a href='https://laptop-gallary-2c921.web.app/' className='btn btn-primary mt-3'>Live Preview</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='mt-3'>
                    <div class="hero  bg-base-200 ">
                        <div class="hero-content flex-col lg:flex-row ">
                            <img src={laptop} alt='' class="max-w-sm rounded-lg shadow-2xl" />
                            <div className=' ms-2'>
                                <h1 class="text-2xl font-bold">Single Doctor </h1>
                                <li>This is a complete responsive website. Users can take treatment from
                                    here.</li>
                                <li>Users must need to login before taking treatment.</li>
                                <li>If anyone is interested in taking treatment from this doctor, he can book  and he must give his details what the doctor wants to know.</li>
                                <li>Same user didn't take again same treatment what he has booked already.</li>
                                <h2 className='text-primary text-bold text-2xl'>Technology:</h2>
                                <p className='text-2xl'>: HTML,React.js,Bootstrap,CSS, Firebase,</p>
                                <a href='https://single-doctor.web.app/'><button className='btn btn-primary mt-3'>Live Preview</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;