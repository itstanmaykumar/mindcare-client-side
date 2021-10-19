import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import login from '../../login.png';

const Join = () => {
  const { googleSignIn } = useAuth();
  return (
    <div className="container py-5">
        <h1 className="fw-bolder text-main">Please Log In</h1>
        <div className="my-5 row align-items-center">
            <div className="col-md-6">
                <img className="img-fluid" src={login} alt="login" />
            </div>
            <div className="col-md-6">
                <div className="my-2">
                    <input className="form-control" type="email" name="email" placeholder="Your E-mail" />
                </div>
                <div className="my-2">
                    <input className="form-control" type="password" name="password" placeholder="Your Password"/>
                </div>
                <div className="pt-3 text-start">
                    <Link type="submit" className="btn btn-main me-3 fw-bolder" to="/profile">Sign In</Link>
                    <span>or</span>
                    <button className="mx-3 btn btn-outline-main" onClick={googleSignIn}><i className="fab fa-google"></i> Sign In With Google</button>
                </div>
                <p className="py-3 my-0 text-start text-second">Are you new here? <Link className="px-2 py-1 rounded-3 text-decoration-none btn-outline-main" to="/signup">Create An Account</Link></p>
            </div>
        </div>
    </div>
  );
};

export default Join;