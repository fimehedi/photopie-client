import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { adminContext, userContext } from '../App';
import NotFoundPage from '../pages/client/NotFoundPage';

const PrivateRoute = ({ isOnlyAdmin, children, ...rest }) => {
	const { loggedInUser } = useContext(userContext);
	const { isAdmin } = useContext(adminContext);

	return (
		<>
			{isOnlyAdmin ? (
				<Route

					{...rest}
					render={({ location }) => (
						<>
							{isAdmin === true && children}
							{isAdmin === null && 'Authenticating...'}
							{isAdmin === false && (
								<NotFoundPage code={403} msg="Unauthenticated access" />
							)}
						</>
					)}
				/>
			) : (
				<Route
					{...rest}
					render={({ location }) =>
						loggedInUser.isAuthenticated ? (
							children
						) : (
							<Navigate
								to={{
									pathname: '/login',
									state: { from: location },
								}}
							/>
						)
					}
				/>
			)}
		</>
	);
};

export default PrivateRoute;
