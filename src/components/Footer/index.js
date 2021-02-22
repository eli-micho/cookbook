import React from 'react';
import './styles.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerLogo">
                <a href="#">
                    <span>justrecipes</span>
                    <i className="fa fa-utensils"></i>
                </a>
            </div>

            <nav className="footerSections">
                <div className="magazinesCTA">
                    <h3>Magazines &amp; More</h3>
                    <a><img/></a>
                </div>
                <div className="learnMoreCTA">
                    <h3>Learn More</h3>
                    <ul>
                        <li>Customer Service</li>
                        <li>Content Licensing</li>
                        <li>Apps</li>
                    </ul>
                </div>
                <div className="connectCTA">
                    <h3>Connect</h3>
                    <span>Follow Us</span>

                    <ul>
                        <li><a><i className="fa fa-facebook"></i></a></li>
                        <li><a><i className="fa fa-pintrest"></i></a></li>
                        <li><a><i className="fa fa-twitter"></i></a></li>
                        <li><a><i className="fa fa-instagram"></i></a></li>
                    </ul>

                    <span>Subscribe</span>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
