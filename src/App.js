import { createContext, useEffect, useState } from 'react';
import './App.css';
import { checkAuthenticate } from './components/authentication/AuthManager';
import AppRouter from './routers/AppRouter';

export const userContext = createContext();
export const adminContext = createContext();

function App() {
	const [loggedInUser, setLoggedInUser] = useState({});
	const [isAdmin, setIsAdmin] = useState(null);
	const [loading, setLoading] = useState(!loggedInUser.isAuthenticated);

	useEffect(() => {
		if (!loggedInUser.isAuthenticated) {
			checkAuthenticate(setLoggedInUser, setLoading);
		}
	}, [loggedInUser.isAuthenticated]);

	useEffect(() => {
		loggedInUser.email &&
			fetch(
				process.env.REACT_APP_API_ROOT +
					'check-admin/?email=' +
					loggedInUser.email
			)
				.then((res) => res.json())
				.then((data) => {
					setIsAdmin(data.isAdmin);
				});
	}, [loggedInUser.email]);

	if (loading) {
		return <p className="text-gray-400">Loading...</p>;
	}

	return (
		<adminContext.Provider value={{ isAdmin, setIsAdmin }}>
			<userContext.Provider value={{ loggedInUser, setLoggedInUser }}>
				<AppRouter />
			</userContext.Provider>
		</adminContext.Provider>
	);
}

export default App;
