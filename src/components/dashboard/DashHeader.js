import React, { useContext } from 'react';
import { userContext } from '../../App';
import { logoutUser } from '../authentication/AuthManager';

const DashHeader = () => {

    const { loggedInUser, setLoggedInUser } = useContext(userContext);

    return (
        <header className="flex justify-between items-center p-6 pt-0 lg:pt-6 sticky top-0 shadow-lg">
            <div className="flex items-center space-x-4 lg:space-x-0">
                <div className="hidden lg:block">
                    <h1 className="text-2xl font-medium text-gray-800 dark:text-white">Dashboard</h1>
                </div>
            </div>

            <div className="flex items-center space-x-4">

                <div className="relative">

                    <div className="flex items-center gap-3 mt-4 lg:mt-0">
                        <h2 className="text-gray-700 dark:text-gray-300 text-sm">{loggedInUser.name}</h2>
                        <button onClick={() => logoutUser(setLoggedInUser)} className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black">Logout</button>
                    </div>

                </div>
            </div>
        </header >

    );
};

export default DashHeader;