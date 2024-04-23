import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'

function Footer() {
    return (
        <>
            <footer>
                <div className='footer-top main-container'>
                    <div className='footer-block interno'>
                        <img className='footer-logo' src="../img/Logo.png" alt="" />
                        <p className='footer-desc'>It is a long established fact that a reader will be distracted lookings.</p>
                        <div className='footer-icon-block'>
                            <a className='footer-icon' href='/' alt="">
                                <img src="../img/facebook.png" alt="" />
                            </a>
                            <a className='footer-icon' href='/' alt="">
                                <img src="../img/twitter.png" alt="" />
                            </a>
                            <a className='footer-icon' href='/' alt="">
                                <img src="../img/linkedin.png" alt="" />
                            </a>
                            <a className='footer-icon' href='/' alt="">
                                <img src="../img/insta.png" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className='footer-block'>
                        <h1 className='footer-title'>Pages</h1>
                        <ul>
                            <li>
                                <Link to="/aboutUs">about us</Link>
                            </li>
                            <li><a href='/' alt="">our projects</a></li>
                            <li><a href='/' alt="">our team</a></li>
                            <li><a href='/' alt="">contact us</a></li>
                            <li><a href='/' alt="">service</a></li>
                        </ul>
                    </div>
                    <div className='footer-block'>
                        <h1 className='footer-title'>service</h1>
                        <ul>
                            <li><a href='/' alt="">kitchan</a></li>
                            <li><a href='/' alt="">living area</a></li>
                            <li><a href='/' alt="">bathroom</a></li>
                            <li><a href='/' alt="">dinning hall</a></li>
                            <li><a href='/' alt="">bedroom</a></li>
                        </ul>
                    </div>
                    <div className='footer-block footer-contact'>
                        <h1 className='footer-title'>contact</h1>
                        <div>
                            <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
                            <p>contact@interno.com</p>
                            <p>(123) 456 - 7890</p>
                        </div>
                    </div>
                </div>
                <div className='footer-bottom full-container'>
                    <p>Copyright © Interno | Designed by Victorflow Templates - Powered by Webflow</p>
                </div>
            </footer>

        </>
    );
}

export default Footer;