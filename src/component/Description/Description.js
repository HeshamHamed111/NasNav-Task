import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './product.css';


class Description extends Component {

    state = {
        imgurl: '/images/tshirt.jpeg',
        quantity: 1,
        name: 'Adidas black T-shirt lorem ipsum dolor sit amet, consecteture adipiscing elit.',
        price: '9,999',
    }

    handlerQuantity = () => {
        this.setState({...this.state, quantity: this.state.quantity + 1});
    }
    handlerAdd = () => {
        this.props.handlerCounter(this.state.quantity);
        this.props.handelState(this.state.imgurl,this.state.name, this.state.quantity, this.state.price);
    }

    render() {
        return (
            <div className="product">
                <div className="pro-img">
                    <div className="logo-adidas-pro">
                        <img src="../../../adidas.png" alt="Logo" />
                    </div>
                </div>
                <div className="pro-description">
                    <p>{this.state.name}</p>
                </div>
                <div className="pro-gender">
                    <p>Men</p>
                </div>
                <div className="pro-rate">
                    <p>
                        <sub> 
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        </sub>
                      <span>4.9 of 5</span>
                      <span>22 Rates</span>      
                    </p>
                </div>
                <div className="pro-price">
                    <span className="new-price">{this.state.price} <small>LE</small></span> <span className="old-price">9.999 LE</span> <span className="offer">30% Off</span>
                </div>
                <div className="pro-size">
                    <p>Size</p>
                    <span>Small</span> <span>Meduim</span> <span>Large</span> <span>X Large</span> <span>XX Large</span>
                </div>
                <div className="pro-color">
                    <p>Color</p>
                    <img src="../../../images/tshirt.jpeg" alt="Tshirt" className="active" /><img src="../../../images/tshirtwhite.jpeg" alt="dfs" />
                </div>
                <div className="pro-quantity">
                    <p>Quantity</p>
                    <div className="inc-dec">
                    <div className="dec" onClick={() => {if(this.state.quantity > 0) this.setState({quantity: this.state.quantity - 1} )}}>-</div>

                    <div className="value"> {(this.state.quantity > 0) ? this.state.quantity : '0'} </div>

                    <div className="inc" onClick={() => {this.setState({quantity: this.state.quantity + 1})}}>+</div>
                    </div>

                </div>
                <div className="pro-purchase">
                    <div className="addtocart" onClick={() => {this.handlerAdd()}}>Add To Cart</div>
                    <div className="pickup">Pickup From Store</div>
                </div>
            </div>
        )
    }
}
export default Description;