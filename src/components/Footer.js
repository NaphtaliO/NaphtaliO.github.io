import React from 'react';

const Footer = () => {
    return (
        <footer className='footer'>
            {/* <div className="footer">
                <div className="container">
                    <div className="row centered">
                        <div className="col">
                            <h4>Website</h4>
                            <p>
                                <Link to="/">PROFILE</Link>
                                <br />
                                <Link to="/projects">WORK</Link>
                                <br />
                                <Link to="/contact">CONTACT</Link>
                                <br />
                            </p>
                        </div>
                        <div className="col">
                            <h4>My Links</h4>
                            <p>
                                <a className='link' href="https://www.instagram.com/_naphtali._/" target="_blank" rel="noreferrer noopener">Instagram</a>
                                <br />
                                <a className='link' href="https://www.linkedin.com/in/naphtali-odinakachi-969b25219/" target="_blank" rel="noreferrer noopener">LinkedIn</a>
                                <br />
                                <a className='link' href="https://www.youtube.com/channel/UC71Lx_miUp4DyzT8q8IOi6g" target="_blank" rel="noreferrer noopener">YouTube</a>
                                <br />
                                <a className='link' href="https://github.com/NaphtaliO" target="_blank" rel="noreferrer noopener">GitHub</a>
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="copyrights centered">
                <h2 className='web-title'>naphtali</h2>
                <p className='copyrights'>&copy; Copyrights <strong>Naphtali</strong> 2022. All Rights Reserved</p>
                <div className="credits">
                    <p>Created with React and Bootstrap by <a href="https://naphtali-68660.web.app/" rel="noreferrer noopener" className="link">Naphtali Odinakachi.</a></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;