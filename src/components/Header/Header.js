import React from 'react';
import { Link } from 'react-router-dom';
import header from '../../images/header.jpg';
import logo from '../../images/icons/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${header})`}} className="header">
              <nav className="nav">
                <ul>
                    <li>
                        <img className="logo" src={logo} alt=""/>
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link className="btn-book" to="/book">Book</Link>
                    </li>
                </ul>
            </nav>
            <div className="title-container">
                <h2>Luxury Hotel Room</h2>
                <h4>A global icon of Luxury Hotel</h4>
            </div>
            
        </div>
    );
};

export default Header;