import React from 'react';
import { Link } from 'react-router-dom';
import Skills from '../components/Skills';

const skills = {
    languages: {
        id: 1,
        header: 'Programming Languages',
        skill: ["HTML", "CSS", "JavaScript", "Java", "Python", "Swift", "SQL", "Command Line/Shell"]
    },
    libraries: {
        id: 2,
        header: 'Libraries & Frameworks',
        skill: ["ReactJS", "React Native", "Flask", "MongoDB", "Express", "Node", "SwiftUI"]
    },
    tools: {
        id: 3,
        header: 'Tools & Technologies',
        skill: ["AWS Amplify", "Firebase", "Xcode", "IntelliJ IDEA", "Visual Studio Code", "MySQL Workbench"]
    }

}
const About = () => {
    return (
        <div className="about">
            <section className="about">
                <div className="container pt">
                    <div className="row">
                        <div className="col-6 col-md-4 justify-content-center">
                            <img src="avatar.png" alt="avatar" className="avatar-about" />
                            <h4 className='avatar-header centered'>Naphtali Odinakachi</h4>
                        </div>
                        <div className="col-md-8">
                            <p>I am a Computer Science Student at University College Cork, React Enthusiast.
                                I mostly build React Applications, mobile applications and web applications respectively.</p>

                            <div className="about">
                                <p>I have a passion for developing innovative programs. </p>
                                <p>I have worked with advanced technologies like React, React Native, SwiftUI, Node, Express, MongoDB, MySQL, Flask, BootStrap5, AWS Amplify, Firebase, Xcode and more in developing <Link to="/projects" className="link">projects</Link>.</p>
                                <p>In the future I hope to create more projects and  hopefully start my own software company in the process while advancing my skills as a software developer.</p>
                                <p>I like to play video games and I love sports i.e. basketball and football.</p>
                                <p>Follow my <Link to="/" className="link">socials</Link> to contact me likewise you can fill my <Link to="/contact" className="link">contact form</Link>.</p>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
            <section className="skills">
                <div className="container">
                    <div className="row">
                        <Skills header={skills.languages.header} skill={skills.languages.skill} />
                        <Skills header={skills.libraries.header} skill={skills.libraries.skill} />
                        <Skills header={skills.tools.header} skill={skills.tools.skill} />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
<div className="about">

</div>