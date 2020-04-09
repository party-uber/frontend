import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthUtils } from '../../utils/AuthUtils';

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            AuthUtils.isLoggedIn() && restricted ?
                <Redirect to="/dashboard" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;