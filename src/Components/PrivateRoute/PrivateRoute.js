import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if(isLoading){
        return (
            <div class="spinner-grow text-main" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        );
    }
    return (
        <Route {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/join",
                    state: { from: location }
                }}
            ></Redirect>
            }>  
        </Route>
    );
};

export default PrivateRoute;