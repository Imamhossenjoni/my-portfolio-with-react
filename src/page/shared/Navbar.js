import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems =
        <>
            <li><Link to='/home'>HOME</Link></li>
            <li><Link to='/blog'>BLOG</Link></li>
            <li><Link to='/portfolio'>PORTFOLIO</Link></li>
            <li><Link to='/contact'>CONTACT</Link></li>
            <li><Link to='/about'>ABOUT</Link></li>
        </>
    return (
        <div class="navbar  bg-neutral text-neutral-content">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">My Portfolio</a>
            </div>
            <div class="navbar-center bg-neutral hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div class="navbar-end">
                <a href='https://drive.google.com/file/d/13pAPp0YcMvf8jlZlVYFpQoluY2Qy2WCB/view?fbclid=IwAR1X1l_bHuPQdWnTYLInrWJRsh6uaG8DONALhJx-0FRToBWBTqsvIuMhicY' download="test"><button className='btn btn-primary'>Download Resume</button></a>
            </div>
        </div>
    );
};

export default Navbar;