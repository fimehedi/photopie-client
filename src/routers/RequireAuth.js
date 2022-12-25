import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { adminContext, userContext } from '../App';
import NotFoundPage from '../pages/client/NotFoundPage';

const RequireAuth = ({ children, redirectTo, onlyForAdmin }) => {
	const { loggedInUser } = useContext(userContext);
	const { isAdmin } = useContext(adminContext);
	const location = useLocation();

	if (loggedInUser.isAuthenticated) {
		if (onlyForAdmin && isAdmin) {
			return children;
		} else if (onlyForAdmin && isAdmin === null) return 'Authentication...';
		else if (onlyForAdmin && isAdmin === false) {
			return <NotFoundPage code={403} msg="Unauthenticated access" />;
		} else {
			return children;
		}
	} else {
		return <Navigate to={redirectTo} replace state={{ from: location }} />;
	}
};

export default RequireAuth;
