import React, { useContext, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { adminContext, userContext } from '../../App';
import { logoutUser } from '../authentication/AuthManager';

const Header = () => {

    const { loggedInUser, setLoggedInUser } = useContext(userContext);
    const { isAdmin } = useContext(adminContext);
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className="shadow-md sticky top-0 bg-white z-50">
            <nav className="container mx-auto flex items-center justify-between flex-wrap bg-teal-500 py-4 px-6 md:py-6">
                <div className="flex items-center flex-shrink-0 text-dark mr-6">
                    <Link to="/"><span className="font-semibold text-xl tracking-tight">PHOTOPIE</span><span></span></Link>
                </div>
                <div className="block lg:hidden">
                    <button onClick={() => setToggleMenu(!toggleMenu)} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400">
                        <FiMenu />
                    </button>
                </div>
                <div className={`w-full ${toggleMenu ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto`}>
                    <div className="text-sm lg:flex-grow">
                        <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-4">
                            Home
                        </Link>
                        <Link to="/services" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-4">
                            Services
                        </Link>
                        <Link to="/blog" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-4">
                            Blog
                        </Link>
                        <Link to="/orders" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-4">
                            Orders
                        </Link>
                        {isAdmin && <Link to="/dashboard/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-4">
                            Dashboard
                        </Link>}
                        {loggedInUser.isAuthenticated && <p className="font-semibold text-sm tracking-tight block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-4">
                            {loggedInUser.name}
                        </p>}
                    </div>
                    <div>
                        {
                            loggedInUser.isAuthenticated ?
                                <button onClick={() => logoutUser(setLoggedInUser)} className="transition duration-200 inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:bg-gray-800 hover:text-white mt-4 lg:mt-0">Logout</button>
                                :
                                <Link to="/login" className="transition duration-200 inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:bg-gray-800 hover:text-white mt-4 lg:mt-0">Login</Link>
                        }
                    </div>
                </div>
            </nav>
        </header >
    );
};

export default Header;;