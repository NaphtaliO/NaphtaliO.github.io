import React from 'react';

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src="images/icons8-website-50.png" alt="" width="30" height="24" className="d-inline-block align-text-top"/>
                        Naphtali.com
                </a>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a href="#about" className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#skills" className="nav-link">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" className="nav-link">Projects</a>
                    </li>
                </ul>
            </div>
        </nav>
        
     );
}
   
export default Navbar;