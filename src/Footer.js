import React from 'react';

const youTubeLink = "https://www.youtube.com/channel/UC71Lx_miUp4DyzT8q8IOi6g";
const gitHubLink = "https://github.com/NaphtaliO";
const instagramLink = "https://www.instagram.com/_naphtali._/";
const linkedInLink = "https://www.linkedin.com/in/naphtali-odinakachi-969b25219/";


const Footer = () => {
    return (
        <div className="footer-basic">
            <footer>
                <div className="social">
                    <ul className='list-inline'>
                        <li className='list-inline-item'><a href={linkedInLink} target="_blank" rel="noreferrer noopener"><i className="bi bi-linkedin"></i></a></li>
                        <li className='list-inline-item'><a href={gitHubLink} target="_blank" rel="noreferrer noopener"><i className="bi bi-github"></i></a></li>
                        <li className='list-inline-item'><a href={instagramLink} target="_blank" rel="noreferrer noopener"><i className="bi bi-instagram"></i></a></li>
                        <li className='list-inline-item'><a href={youTubeLink} target="_blank" rel="noreferrer noopener"><i className="bi bi-youtube"></i></a></li>
                    </ul>
                    <p className='copyright'>Naphtali.com &copy; 2022</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;