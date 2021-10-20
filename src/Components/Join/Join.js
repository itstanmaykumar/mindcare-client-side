import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import login from '../../login.png';

const Join = () => {
    const { googleSignIn } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const handleGoogle = () => {
        googleSignIn()
        .then ((result) => {
            history.push(redirect_url);
        });
    };

    return (
    <div className="container py-5">
        <h1 className="fw-bolder text-main">Please Log In</h1>
        <div className="my-5 row align-items-center">
            <div className="col-md-6">
                <img className="img-fluid" src={login} alt="login" />
            </div>
            <div className="col-md-6 pe-5">
                <div className="my-2">
                    <input className="form-control" type="email" name="email" placeholder="Your E-mail" />
                </div>
                <div className="my-2">
                    <input className="form-control" type="password" name="password" placeholder="Your Password"/>
                </div>
                <div className="pt-3 text-start">
                    <button type="submit" className="btn btn-main me-3 fw-bolder">Sign In</button>
                </div>
                <p className="py-3 my-0 text-start text-second">Don't Have An Account? <Link className="px-2 py-1 rounded-3 text-decoration-none btn-outline-main" to="/signup">Sign Up</Link></p>
                <hr />
                <button className="me-auto btn btn-outline-main d-block text-start" onClick={handleGoogle}><i className="fab fa-google"></i> Sign In With Google</button>
            </div>
        </div>
    </div>
  );
};

export default Join;