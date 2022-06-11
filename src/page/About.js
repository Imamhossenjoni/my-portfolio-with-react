import React from 'react';
import './About.css'
import jony from '../images/jony.jpg'

const About = () => {
    return (
        <div>
            <div className=' grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
                <div className=' py-2 px-5'>
                    <h1>Welcome To </h1>
                    <h1 className='text-2xl'> <span class="orange-color">My portfolio </span> World</h1>
                    <h2 className='font-bold'>Hello Guy's. I'm <span className='text-2xl orange-color'>Imam Hossen Jony</span></h2>
                    <p className=''>I am a student. I am studying at Feni Computer Institue. Department of Computer Science and Technologe.Now, I am <span className='orange-color'>working Web Development with React</span>.I am a <span className='orange-color font-bold'>font-end Web Developer.</span></p>
                    <a href='https://drive.google.com/file/d/13pAPp0YcMvf8jlZlVYFpQoluY2Qy2WCB/view?fbclid=IwAR1X1l_bHuPQdWnTYLInrWJRsh6uaG8DONALhJx-0FRToBWBTqsvIuMhicY'><button className='link-button mt-3'>DOWNLOAD RESUME</button></a>
                </div>
                <div>
                    <img className='mt-5' style={{ height: '250px' }} src={jony} alt=''></img>
                </div>
            </div>
            <div>
                <div className='flex mt-5'>
                    <div className='experience mt-5 full-stack-developer mt-5 '>
                        <h4 className='text-accent font-bold text-2xl'>Experiences:</h4>
                        <h1 className='orange-color font-bold'>Full Stack Developer</h1>
                        <h6 className='text-2xl'>2022- present pro level Web Developer</h6>
                        <p>I am master of HTML, CSS & JavaScript.I know everythink need to make a website function,efficient.I didn't stop with the web developer.I went beyond with most popular JavaScript framework called Vue JS. I even know the diployment, server and security.I will give you 100% Web related solution.</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;