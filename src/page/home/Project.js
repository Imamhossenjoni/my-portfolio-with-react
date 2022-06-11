import React from 'react';
import { useNavigate } from 'react-router-dom';
const Project = ({ project }) => {
    const navigate=useNavigate();
    
    const { name, description, img,id,live} = project
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p><span className='text-accent font-bold'>description:</span> {description}</p>
                    <div class="card-actions">
                        <button onClick={() => navigate(`/details/${id}`)} class="btn btn-primary">Details</button>
                        <a href={live} target="blank">
                                <button className="text-center rounded-lg px-4  py-3  bg-accent text-white">
                                    Live Preview
                                </button>
                            </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;