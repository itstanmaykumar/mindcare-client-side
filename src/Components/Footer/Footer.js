import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';
import playstore from '../../android.png';

const Footer = () => {
    return (
        <div className="bg-dark">
            <div className="row container justify-content-between text-start">
                <div className="mt-4 col-lg-2 col-sm-6 order-lg-2 order-xs-2">
                    <h6 className="mb-2 text-white"><span className="border-2 border-bottom border-main">Quick </span>Links</h6>
                    <Link className="text-decoration-none d-block text-second foo-hover" to="/info">About Us</Link>
                    <Link className="text-decoration-none d-block text-second foo-hover" to="/feedback">Feedback</Link>
                    <Link className="text-decoration-none d-block text-second foo-hover" to="/services">Make Appointment</Link>
                    <Link className="text-decoration-none d-block text-second foo-hover" to="/career">Career</Link>
                </div>
                <div className="mt-4 mb-3 col-lg-3 col-sm-6 order-lg-3 order-xs-1 text-white">
                    <h6 className="mb-2 text-white"><span className="border-2 border-bottom border-main">Connect Wi</span>th Us</h6>
                    <div className="d-flex text-second my-2">
                        <small className="col-md-1"><i className="fas fa-map-marker-alt text-white"></i></small>
                        <small>123, Jhankar Mahbub Street,<br/>Programming Hero, Bangladesh</small>
                    </div>
                    <div className="d-flex text-second my-2">
                        <small className="col-md-1"><i className="fas fa-phone-alt text-white"></i></small>
                        <small>999, +88012345</small>
                    </div>
                    <h6 className="mt-3 mb-3 text-white"><span className="border-2 border-bottom border-main">Download O</span>ur App</h6>
                    <div className="row justify-content-between pe-5">
                        <Link className="d-block pe-xl-5 pe-lg-0 pe-md-5 pb-3 pe-5" to="/playstore">
                            <img className="w-100" src={playstore} alt="android" />
                        </Link>
                    </div>
                </div>
                <div className="mt-4 col-lg-4 col-sm-12 order-lg-1 order-xs-3">
                    <div className="pb-2">
                        <Link className="navbar-brand" to="/home">
                            <img className="me-2 pb-1" width="20" src={logo} alt="mindcare logo" />
                            <span className="fw-bolder text-main">mindcare</span>
                        </Link>
                    </div>
                    <small className="text-second d-block"><span className="text-white">mindcare</span> provides comprehensive out-patient treatment for psychiatric disorders by a multi-disciplinary team consisting of a psychiatrist, psychologist, trained nurse, and occupational therapist.</small>
                    <div className="mt-2 mb-4">
                        <Link to="/social"><i className="pe-3 text-white fab fa-facebook-f"></i></Link>
                        <Link to="/social"><i className="pe-3 text-white fab fa-twitter"></i></Link>
                        <Link to="/social"><i className="pe-3 text-white fab fa-google-plus-g"></i></Link>
                        <Link to="/social"><i className="pe-3 text-white fab fa-linkedin-in"></i></Link>
                    </div>
                    <small className="text-second">Copyright &copy; 2021. <span className="text-light">Tanmay Kumar.</span></small>
                    <div>
                        <Link to="/desclaimer" className="text-decoration-none text-main foo-hover"><small>Desclaimer.</small></Link>
                        <Link to="/tnc" className="text-decoration-none text-main px-2 foo-hover"><small>Terms & Conditions.</small></Link>
                        <Link to="/privacy" className="text-decoration-none text-main foo-hover"><small>Privacy Policy.</small></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;