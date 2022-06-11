import React from 'react';
import Banner from './Banner';
import Message from './Message';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Skills></Skills>
            <Projects></Projects>
            <Message></Message>
        </div>
    );
};

export default Home;