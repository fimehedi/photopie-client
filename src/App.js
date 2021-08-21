import AddRouter from './routers/AddRouter';
import './App.css';
import { createContext, useEffect, useState } from 'react';
import { checkAuthenticate } from './components/authentication/AuthManager';

export const userContext = createContext();
export const adminContext = createContext();

function App() {

    const [loggedInUser, setLoggedInUser] = useState({});
    const [isAdmin, setIsAdmin] = useState();
    const [loading, setLoading] = useState(!loggedInUser.isAuthenticated);

    useEffect(() => {
        if (!loggedInUser.isAuthenticated) {
            checkAuthenticate(setLoggedInUser, setLoading);
        }
    }, [loggedInUser.isAuthenticated]);

    useEffect(() => {
        setLoading(true);
        fetch('https://photo-pie.herokuapp.com/check-admin/?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data.isAdmin);
                setLoading(false);
            });
    }, [loggedInUser.email]);


    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <adminContext.Provider value={{ isAdmin, setIsAdmin }}>
            <userContext.Provider value={{ loggedInUser, setLoggedInUser }}>
                <AddRouter />
            </userContext.Provider>
        </adminContext.Provider>

    );
}

export default App;
