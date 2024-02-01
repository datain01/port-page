import React from 'react';

const NavBar: React.FC = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top " >
                <div className="container-fluid">
                <a className="navbar-brand ms-5" href="#">Soeun</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse mx-5" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <a className="nav-link" aria-current="page" href="#">Home</a>
                    <a className="nav-link" href="#">About</a>
                    <a className="nav-link" href="#">Projects</a>
                    <a className="nav-link" href="#">Education</a>
                    <a className="nav-link" href="#">Contact</a>
                    </div>
                    <div className="ms-auto">
                    <a className="nav-link fw-bold me-5" href="#">e-mail: baksoeun01@gmail.com</a>
                    </div>
                </div>
                </div>
        </nav>
 );
}

export default NavBar;