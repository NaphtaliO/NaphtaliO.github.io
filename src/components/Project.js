import React from 'react';

const Project = ({ title, description, github }) => {
    return (
        <div class="col-sm-4">
            <div className="card centered">
                <div className="card-body">
                    <h4 className="card-title project-title">{title}</h4>
                    <p className="card-text">{description}</p>
                    <a href={github} class="button" target="_blank" rel="noreferrer noopener">GitHub</a>
                </div>
            </div>
        </div>

    );
}

export default Project;