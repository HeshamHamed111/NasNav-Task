import React, { Component } from 'react';
import './product.css';

class Productimg extends Component {
    

    render() {
        return (
            <div>
                <div className="product-img">
                    <div className="main-img">
                        <img src='/images/tshirt.jpeg' alt="T-shirt" />
                    </div>
                    <div className="sub-img">
                        <img src="/images/tshirt1.jpeg" alt="T-shirt" />
                        <img src="/images/tshirt2.jpeg" alt="T-shirt" />
                        <img src="/images/tshirt3.jpeg" alt="T-shirt" />
                        <img src="/images/tshirt4.jpeg" alt="T-shirt" />
                    </div>
                </div>
            </div>
        )
    }
}
export default Productimg;