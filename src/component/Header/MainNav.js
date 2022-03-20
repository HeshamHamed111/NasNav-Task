import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import { faCartArrowDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './header.css';

class MainNav extends Component {

    render() {
        return (
            <div className="mainHeader">
                <div className="container">
                    <div className="main-links">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="search">
                                    <input type="text" className="search-input" placeholder="Search"/>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="logo-adidas">
                                    <img src="/assets/images/tshirt1.jpeg" alt="Adidas-Logo" />
                                </div>
                            </div>
                            <div className="col-lg-1">
                            
                                 <p className="counter-cart" onClick={() => {this.props.handleToggle()}}>
                                 
                                    <span> {this.props.counter} </span>
                                    <FontAwesomeIcon icon={faCartArrowDown} /> Cart
                              
                                 </p>
                            </div>
                            <div className="col-lg-1">
                                <p style={{margin: "19px -12px"}}><FontAwesomeIcon icon={faHeart} /> Wishlist</p>
                            </div>
                            <div className="col-lg-1">
                                <p><FontAwesomeIcon icon={faUser} /> Login</p>
                            </div>                                                
                        </div>                    
                    </div>
                </div>
            </div>
        )
    }


}
export default MainNav;