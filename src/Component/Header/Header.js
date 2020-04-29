import React from 'react';
import logo from '../../Image/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt=""/>
            <p>Madina Bank Ltd</p>
            <nav className='nav-bar'>
                <a href="/employee">Employee Info</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
        
    );
};

export default Header;