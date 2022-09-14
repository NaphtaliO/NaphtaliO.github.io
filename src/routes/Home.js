import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="home centered">
            <div className="container">
                <div className="header">
                    <div className="row justify-content-center">
                        <div className="col-6  ">
                            <img src="avatar.png" alt="avatar" className="avatar" />
                            <h1 className='avatar-header'>Naphtali Odinakachi</h1>
                            <div className="icons">
                                <a href="https://www.linkedin.com/in/naphtali-odinakachi-969b25219/" target="_blank" rel="noreferrer noopener"><i class="bi bi-linkedin"></i></a>
                                <a href="https://github.com/NaphtaliO" target="_blank" rel="noreferrer noopener"><i class="bi bi-github"></i></a>
                                <a href="https://www.instagram.com/_naphtali._/" target="_blank" rel="noreferrer noopener"><i class="bi bi-instagram"></i></a>
                                <a href="https://www.youtube.com/channel/UC71Lx_miUp4DyzT8q8IOi6g" target="_blank" rel="noreferrer noopener"><i class="bi bi-youtube"></i></a>
                            </div>
                            <a className='centered' href="https://docs.google.com/document/d/1330qCqa-klz_tTKciofS1aYSzp9wiGmp/edit?usp=sharing&ouid=116172055137331823772&rtpof=true&sd=true" target="_blank" rel="noreferrer noopener">
                                <button className='btn btn-dark cv-button centered'>My CV</button>
                            </a>
                            <p>I am a Computer Science Student at University College Cork, React Enthusiast. </p>
                            <p>I mostly build React Applications, mobile applications and web applications respectively.</p>
                            <p>Click <Link to="/about" className="link">HERE</Link> to read more about me.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
