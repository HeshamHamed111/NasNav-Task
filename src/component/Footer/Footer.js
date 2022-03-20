import React, { Component } from 'react';
import data from '../../data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faTwitter } from '@fortawesome/free-solid-svg-icons';
import './footer.css';

class Footer extends Component {

    render() {
        return (
            <div className="footer">
            <div className="container">
                <div className="desc-footer">
                    <h2>Yeshtery</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven</p>
                    <p>Ut enim ad minim veniam, non proident minim veniam, eaque eu fugiat nulla pariatur et iust et dolore magna 
                    aliqu aliqu ad minim veniam, non proident minim veniam, eaque eu fugiat nulla pariatur et iust et dolore magna aliqua. Except
                    Lorem ipsum dolor
                    </p>
                    <p>m enim dolor minim veniam Lorem laorret magna Lorem  veniam, eaque eu fugiat nulla pariatur et iust et dolore magna 
                    aliqu aliqu ad minim veniam, non </p>
                </div>
                <div className="subs-footer">
                    <p>Subscribe to our newsletter</p>
                    <div className="search-footer">
                        <input type="email" placeholder="Enter Your Mail.." />
                        <div className><span>Subscribe</span><FontAwesomeIcon icon={faPaperPlane} /></div>
                    </div>
                    <div className="soical">
                        <div className="sitmap">
                            <ul className="list-unstyled">
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>Track Order</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                                <li>Sell With Us</li>
                                <li>Shipping And Returns</li>
                            </ul>
                        </div>
                        <div className="soical-connect">
                            <ul className="list-unstyled">
                                <li><img src="/images/facebook.png" alt="Facebook" /> /YESHTERY</li>
                                <li><img src="/images/Linkedin.png" alt="Linked" /> /YESHTERY</li>
                                <li><img src="/images/insta.jpg" alt="Linked" /> /YESHTERY</li>
                                <li><img src="/images/twit.png" alt="Linked" /> /YESHTERY</li>
                            </ul>
                        </div>
                    </div>
                </div>
             </div>
            </div>
        )
    }
}
export default Footer;