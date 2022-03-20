import React, { Component } from 'react';
import data from '../../data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './similar.css';


class SimilarProduct extends Component {


    render() {
        return (
            <div>
                <div className="similar-pro">
                    <h2>Similar Product</h2>
                    <p>You may like this products also</p>
                    <div className="pro-cart">
                    {
                        data.map(item => {
                            return(
                                <div className="pro-data" key={item.id}>
                                    <div className="pro-data-img">
                                        <img src={`${item.urlimage}`} alt={item.id} />
                                    </div>
                                    <div className="pro-name">
                                        <p>{item.name}</p>
                                    </div>
                                    <div className="pro-all">
                                        <div className="pro-data-price">
                                            <div className="pro-real-price">
                                                <span>{item.newPrice} <small>LE</small></span>
                                            </div>
                                            <div className="pro-old-price" style={{display: `${item.offer ? 'block' : 'none'}`}}>
                                                <span>{item.oldPrice} LE</span> 
                                                <span>{item.offer}</span>
                                            </div>
                                        </div>
                                        <div className="pro-data-logo">
                                            <img src= "./adidas.png" alt="logo" />
                                        </div>
                                    </div>
                                    <div className="pro-data-rate">
                                    <sub> 
                                    <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                                    </sub>
                                    <span>4.2 Of 5</span>
                                    </div>
                                    <div className="pro-data-pikup" style={{display: `${item.pickup ? 'block' : 'none'}`}}>
                                        <p>Pickup From: {item.pickup}</p>
                                    </div>
                                    <div className="pro-data-fromto" style={{display: `${item.from ? 'flex' : 'none'}`}}>
                                        <p>From: {item.from}</p>
                                        <p>To: {item.to}</p>
                                        <p>In: {item.in}days</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>

                </div>
            </div>
        )
    }
}
export default SimilarProduct;