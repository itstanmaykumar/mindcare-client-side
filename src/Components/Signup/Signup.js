import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import signin from '../../signin.png';

const Signup = () => {
    const { googleSignIn } = useAuth(); 
    return (
    <div className="container py-5">
        <h1 className="fw-bolder text-main">Create A New Account</h1>
        <div className="my-5 row align-items-center">
            <div className="col-md-6">
                <img className="img-fluid" src={signin} alt="login" />
            </div>
            <div className="col-md-6 pe-5">
                <div className="my-2">
                    <input className="form-control" type="text" name="fName" placeholder="Your Full Name" />
                </div>
                <div className="my-2">
                    <input className="form-control" type="email" name="email" placeholder="Your E-mail" />
                </div>
                <div className="my-2">
                    <input className="form-control" type="password" name="password" placeholder="Your Password"/>
                </div>
                <div className="pt-3 text-start">
                    <button type="submit" className="btn btn-main me-3 fw-bolder">Sign Up</button>
                </div>
                <p className="py-3 my-0 text-start text-second">Already Have An Account? <Link className="px-2 py-1 rounded-3 text-decoration-none btn-outline-main" to="/join">Sign In</Link></p>
                <hr />
                <button className="me-auto btn btn-outline-main d-block text-start" onClick={googleSignIn}><i className="fab fa-google"></i> Sign Up With Google</button>
            </div>
        </div>
    </div>
  );
};

export default Signup;