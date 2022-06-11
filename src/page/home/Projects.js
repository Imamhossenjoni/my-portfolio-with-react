import React, { useEffect, useState } from 'react';
import dashboard from '../../images/Untitled.png'
import order from '../../images/booking.png'
import laptop from '../../images/laptop-gallary.png'
import Project from './Project';
import { useNavigate } from 'react-router-dom';

const Projects = () => {

    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setProjects(data));
    }, []);
    return (
        <div className='mt-5 px-12'>
            <p className='text-accent text-center text-4xl text-bold '>My Projects</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                {
                    projects.map(project=><Project key={project.id}project={project} ></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;