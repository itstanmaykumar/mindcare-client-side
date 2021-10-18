import React from 'react';
import { Link } from 'react-router-dom';
import showImg from '../../showcase-img.png'

const Home = () => {
    return (
        <div className="container">
            <section className="my-3 row justify-content-between align-items-center">
                <div className="col-md-5 text-start">
                    <p className="fw-bolder text-main">HEALING THERAPY</p>
                    <h1 className="fw-bolder">Make Your Own <span className="text-main">Mental Health</span> A Priority.</h1>
                    <p className="text-second">Choose your own therapist...</p>
                    <Link className="px-4 btn btn-main fs-5 rounded-pill" to="/services">Get Started</Link>
                </div>
                <div className="col-md-7">
                    <img className="img-fluid" src={showImg} alt="showcase img" />
                </div>
            </section>
        </div>
    );
};

export default Home;