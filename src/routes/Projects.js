import React from 'react';
import Project from '../components/Project';

const projects = [
    {
        id: 1,
        title: "netflix-clone",
        description: "A clone of Netflix made with React JS",
        github: "https://github.com/NaphtaliO/netflix-clone"
    }, 
    {
        id: 2,
        title: "calculator-app",
        description: "A simple calculator app made with react native",
        github: "https://github.com/NaphtaliO/calculator-app"
    },
    {
        id: 3,
        title: "react-native-auth",
        description: "Basic application authentication with React Native for the front end and AWS Amplify for the back end.",
        github: "https://github.com/NaphtaliO/react-native-auth-aws-amplify"
    },
    {
        id: 4,
        title: "todo-list",
        description: "A very simple todo list application built with React Native",
        github: "https://github.com/NaphtaliO/my-todo-list"
    },
    {
        id: 5,
        title: "my-personal-website",
        description: "A project I am very proud of and you are currently viewing it. I built this with React and Bootstrap.",
        github: "https://github.com/NaphtaliO/NaphtaliO.github.io"
    },
    

]

const Projects = () => {
    return (
        <div className="projects centered">
            <div className="container pt">
                <div className="row justify-content-center">
                    <div className="col-6 align-self-center">
                        <h3 className='header-title'>My Work</h3>
                        <hr />
                        <p className='header-text'>Here are some of the projects I've worked on. To see more visit my <a href="https://github.com/NaphtaliO" className="link">GitHub</a>.</p>
                    </div>
                </div>
                <div className='responsive'>
                    <div class="row project">
                    {projects.map((project) => (
                        <Project title={project.title} description={project.description} github={project.github} />
                    ))}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;