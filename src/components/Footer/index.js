import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerLogo">
                <a href="#">
                    <span><Link to="/">justrecipes</Link></span>
                    <i className="fa fa-utensils"></i>
                </a>
            </div>

            <nav className="footerSections">
                <div className="magazinesCTA">
                    <h3>Magazines &amp; More</h3>
                    <a><img/></a>
                </div>
                <div className="learnMore">
                    <h3>Learn More</h3>
                    <ul className="learnMoreCTA">
                        <a href="#"><li>Customer Service</li></a>
                        <a href="#"><li>Content Licensing</li></a>
                        <a href="#"><li>Apps</li></a>
                    </ul>
                </div>
                <div className="connect">
                    <h3>Connect</h3>
                    <span>Follow Us</span>

                    <ul className="connectCTA">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                    </ul>

                    <span>Subscribe</span>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
