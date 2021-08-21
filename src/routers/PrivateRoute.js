import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { adminContext, userContext } from '../App';
import NotFoundPage from '../pages/NotFoundPage';

const PrivateRoute = ({ isOnlyAdmin, children, ...rest }) => {

    const { loggedInUser } = useContext(userContext);
    const { isAdmin } = useContext(adminContext);


    return (
        <>
            {
                isOnlyAdmin ?
                    <Route
                        {...rest}
                        render={({ location }) =>
                            isAdmin
                                ?
                                children
                                :
                                <NotFoundPage code={403} msg="Unauthorize Access!" />

                        }
                    />
                    :
                    <Route
                        {...rest}
                        render={({ location }) =>
                            loggedInUser.isAuthenticated
                                ?
                                children
                                :
                                <Redirect
                                    to={{
                                        pathname: '/login',
                                        state: { from: location }
                                    }}
                                />
                        }
                    />
            }
        </>
    );
};

export default PrivateRoute;