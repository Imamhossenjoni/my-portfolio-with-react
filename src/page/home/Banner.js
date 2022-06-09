import React from 'react';
import img from '../../images/jony.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div class="hero min-h-screen text-white bg-black">
            <div class="hero-content flex-col lg:flex-row">
                <img src={img} alt='' class="max-w-sm rounded-lg shadow-2xl" />
                <div className='py-6'>
                    <h1 className="text-4xl font-bold">I am <br/>Imam Hossen Joni</h1>
                    <p className='text-2xl text-accent text-secondary'>Junior Web Developer</p>
                    <p class="py-6 text-xl">I am Junior Software Developer. I work with JavaScript based font-end and backend frameworks. I am currently working on React.</p>
                    <button className="btn btn-primary">Hire Me</button>
                </div>
            </div>
        </div>
       
    );
};

export default Banner;