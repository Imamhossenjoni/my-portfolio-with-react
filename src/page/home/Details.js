import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { allProjects } from '../../projects';


const Details = () => {
    const { detailsId } = useParams();


    console.log(detailsId);
    const project = allProjects.find((p) => p.id === parseInt(detailsId));
    console.log(project);

    return (

        <div>
            <h2 className='text-3xl mb-4 text-center mt-4 font-bold'>My Projects Images</h2>
            <div>
                <div class="card p-5 bg-base-100 grid lg:grid-cols-3 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={project.img1} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <figure class="px-10 pt-10">
                        <img src={project.img3} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <figure class="px-10 pt-10">
                        <img src={project.img2} alt="Shoes" class="rounded-xl" />
                    </figure>
                </div>
                <div class="card w-96 bg-neutral mx-auto mt-5 text-neutral-content">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-secondary">Project Name:{project.name}</h2>

                        <p className='text-accent'>What I did in this Projects:</p>
                        <li>{project.point1}</li>
                        <li>{project.point2}</li>
                        <li>{project.point3}</li>
                        <li>{project.point4}</li>
                        <li>{project.point5}</li>
                        <div class="card-actions justify-center">
                            <a href={project.client} target="blank">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-primary text-white">
                                    Client Code
                                </button>
                            </a>
                            <a href={project.server} target="blank">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-primary text-white">
                                    Server Code
                                </button>
                            </a>
                            <a href={project.server} target="blank">
                                <button className="text-center rounded-lg px-4 font-bold py-3 m-2 bg-accent text-white">
                                    Live Preview
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;