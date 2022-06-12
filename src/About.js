import React from 'react'


const youTubeLink = "https://www.youtube.com/channel/UC71Lx_miUp4DyzT8q8IOi6g";
const gitHubLink = "https://github.com/NaphtaliO";
const instagramLink = "https://www.instagram.com/_naphtali._/";
const linkedInLink = "https://www.linkedin.com/in/naphtali-odinakachi-969b25219/";
const CVLink = "https://docs.google.com/document/d/1330qCqa-klz_tTKciofS1aYSzp9wiGmp/edit?usp=sharing&ouid=116172055137331823772&rtpof=true&sd=true";

const About = () => {
    return (
        <div className="about" id="about">
            <div className="container">
                <div className="section-title">
                    <h3>About</h3>
                    <hr />
                </div>
                <div className="row">
                    <div className="col-6 col-md-4 content">
                        <img src="images/avatar.png" alt="avatar" className="avatar" />
                        <div className="icons">
                            <a href={linkedInLink} target="_blank" rel="noreferrer noopener"><i className="bi bi-linkedin"></i></a>
                            <a href={gitHubLink} target="_blank" rel="noreferrer noopener"><i className="bi bi-github"></i></a>
                            <a href={instagramLink} target="_blank" rel="noreferrer noopener"><i className="bi bi-instagram"></i></a>
                            <a href={youTubeLink} target="_blank" rel="noreferrer noopener"><i className="bi bi-youtube"></i></a>
                        </div>
                        <div className="btn-link">
                            <a href={CVLink} target="_blank" rel="noreferrer noopener"><button className='btn btn-dark btn-lg' >My CV</button></a>
                        </div>
                        
                    </div>
                    <div className="col-md-8">
                        <h3>Hi, welcome to my website!👋</h3>
                        <br />
                        <p>I am a Computer Science Student at University College Cork, React Enthusiast. Skilled in various tools and technologies such as ; </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;