import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container nav-container">
                <Link to="/" className='navbar-brand'>
                    <h2 className='nav-text web-title'>naphtali.me</h2>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end navbar-nav me-auto mb-2 mb-lg-0" id="navbarSupportedContent">
                    <ul className="navbar-nav justify-content-end ">
                        <li className="nav-item">
                            <Link className='nav-link active link-light' to="/">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link active link-light' to="/about">ABOUT</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link active link-light' to="/projects">WORK</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link active link-light' to="/contact">CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;