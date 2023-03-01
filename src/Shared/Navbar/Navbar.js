import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">

                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a className='text-accent hover:text-primary bg-white font-bold'>Home</a></li>
                            <li><a className='text-accent hover:text-primary bg-white font-bold'>Posts</a></li>
                            <li><a className='text-accent hover:text-primary bg-white font-bold'>Category</a></li>
                            <li><a className='text-accent hover:text-primary hover:border-b bg-white font-bold'>Technology</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-2xl font-bold ml-7 hover:bg-white">BlogToday</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        <li><a className='text-accent hover:text-primary bg-white font-bold'>Home</a></li>
                        <li><a className='text-accent hover:text-primary bg-white font-bold'>Posts</a></li>
                        <li><a className='text-accent hover:text-primary bg-white font-bold'>Category</a></li>
                        <li><a className='text-accent hover:text-primary bg-white font-bold'>Technology</a></li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='flex bg-neutral border rounded-2xl focus:ring mr-12'>
                        {/* < FiSearch className='mt-3 ' /> */}
                        <a className=""><input className='bg-neutral focus:outline-primary p-3 border rounded-2xl' type="search" placeholder='Search ...' /></a>
                    </div>
                </div>

                {/* <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                </div> */}

                {/* <div className="drawer">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">

                        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                            <li><a>Sidebar Item 1</a></li>
                            <li><a>Sidebar Item 2</a></li>

                        </ul>
                    </div>
                </div> */}

            </div>
        </div>
    );
};

export default Navbar;