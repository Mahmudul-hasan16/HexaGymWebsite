import React from 'react';
import logo from '../../images/logo1-01-01.png';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/instructor">Instructor</a>
                <a href="/schedule">Schedule</a>
                <a href="/blogs">Blogs</a>
                <a href="/aboutus">About Us</a>
            </div>
        </nav>
    );
};

export default Header;