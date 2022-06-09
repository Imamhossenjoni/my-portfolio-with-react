import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Message.css'

const Message = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_xloldmw', 'template_lqc9qo9', form.current, 'VboXTGETz_ekhiI9C')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.value.reset();
    };


    return (
        <div className='message-section  text-white mt-3'>
            <div className='mx-auto text-center grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1'>
                <h2 className='text-3xl text-bold text-accent mt-2 mb-2 '>Give Your Comments:</h2>
                <form onSubmit={sendEmail} className=' mx-auto' >
                    <label>Name:</label><br />
                    <input type='text' name='name' placeholder='Enter Your Name' required></input ><br />
                    <label>Email:</label><br />
                    <input type='email' name='email' placeholder='Enter Your Email' required></input><br />
                    <textarea cols='66' rows='8' placeholder='Message' type='text' className='mt-3'></textarea><br />
                    <input type='submit' value='Send'></input><br />
                </form>
            </div>
        </div>
    );
};

export default Message;