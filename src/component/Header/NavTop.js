import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import {faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import {faAngleRight } from '@fortawesome/free-solid-svg-icons';


import './header.css';
class NavTop extends Component {

    render() {
        return (
            <div className="navtop">
                <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="brand">
                        <FontAwesomeIcon icon={faBarsStaggered} />
                        <span>Yeshtery</span>                        
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="offer">
                            <p><FontAwesomeIcon icon={faAngleLeft} />  Valentine's Day Offers Buy Two Get One Free <span>Shop Now</span> <FontAwesomeIcon icon={faAngleRight} /></p>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="contact">
                        <p><FontAwesomeIcon icon={faPhone} /> Contact Us</p>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="order">
                        <p><FontAwesomeIcon icon={faCartShopping} /> Track Order</p>                        
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="store">
                        <p><FontAwesomeIcon icon={faLocationDot} /> Find A Store</p>                        
                        </div>
                    </div>                                        
                </div>
                </div>
            </div>
        )
    } 
} 
export default NavTop