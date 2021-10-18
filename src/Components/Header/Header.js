import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.png'

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
                <div class="container">
                    <Link class="navbar-brand" to="/home">
                        <img className="me-2 pb-1" width="20" src={logo} alt="mindcare logo" />
                        <span className="fw-bolder">mindcare</span>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                        <li class="nav-item me-2">
                            <Link class="nav-link" to="/services">Find therapy</Link>
                        </li>
                        <li class="nav-item me-2">
                            <Link class="nav-link" to="/blogs">Bolgs</Link>
                        </li>
                        <li class="nav-item me-2">
                            <Link class="nav-link" to="/info">Info</Link>
                        </li>
                        <li className="me-5"></li>
                        <li class="nav-item">
                            <Link class="btn btn-outline-main fw-bolder" to="/join">Join Us</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;