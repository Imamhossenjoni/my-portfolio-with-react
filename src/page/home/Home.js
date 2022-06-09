import React from 'react';
import Banner from './Banner';
import Message from './Message';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <Message></Message>
        </div>
    );
};

export default Home;