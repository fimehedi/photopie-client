import React, { useState } from 'react';
import DashboardMain from '../components/dashboard/DashboardMain';
import DashHeader from '../components/dashboard/DashHeader';
import Sidebar from '../components/dashboard/Sidebar';
import { FiMenu } from 'react-icons/fi';


const Dashboard = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    

    return (
        <div className="flex h-screen bg-gray-100 dark:bg-gray-800 font-roboto">
            {
                toggleMenu &&
                <div onClick={() => setToggleMenu(false)} className="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"></div>
            }

            <Sidebar classes={`${toggleMenu ? 'block' : 'hidden'} lg:block`} />
            <div className="block relative top-4 left-5 lg:hidden z-20">
                <button onClick={() => setToggleMenu(!toggleMenu)} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400">
                    <FiMenu />
                </button>
            </div>
            <div className="flex-1 flex flex-col overflow-hidden">
                <DashHeader />
                <DashboardMain />
            </div >
        </div >
    );
};

export default Dashboard;