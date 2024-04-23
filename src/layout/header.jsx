import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
    return (
        <>
            <div style={{ position: `relative`, zIndex: `1` }}>
                {/* style={{ backgroundImage: `url(Background.png)`,backgroundPosition: `center`, backgroundRepeat: `no-repeat` }} */}
                <header>
                    <div className="header">
                        <div className="logo">
                            <img src="../img/Logo.png" alt="" />
                            <span className="toggal-bar nav-close"></span>
                        </div>
                        <div className="navbar nav-mobile">
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/aboutUs">about us</Link>
                                </li>
                                <li><a href="/">Service</a></li>
                                <li><a href="/">Project</a></li>
                                <li><a href="/">Blog</a></li>
                                <li><a href="/">Contact</a></li>
                                <img className='nav-search' src="../img/search.png" alt="" />
                            </ul>
                        </div>
                    </div>
                </header>
            </div>
        </>
    );
}
export default Header;