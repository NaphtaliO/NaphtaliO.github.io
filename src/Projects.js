import React from 'react'
import Project from './Project';

const p1 = {
    title: "My-todo-list",
    description: "A todo list mobile application made with React Native",
    link: "https://github.com/NaphtaliO/my-todo-list"
};

const p2 = {
    title: "Netflix-clone",
    description: "A clone of Netflix web app made with React JS",
    link: "https://github.com/NaphtaliO/netflix-clone"
};

const Projects = (title, description, link) => {
    return ( 
        <div className="projects" id="projects">
            <div className="container">
                <div className="section-title">
                    <h3>Projects</h3>
                    <hr />
                </div>

                <div className="row">
                    <Project title={p1.title} description={p1.description} link={p1.link} />
                    <Project title={p2.title} description={p2.description} link={p2.link} />
                </div>
               
            </div>
        </div>
     );
}
 
export default Projects;