import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './Home';
import MenuCart from './component/MenuCart/MenuCart';

import './App.css';


class App extends Component {

  state = {
    imgState: '', 
    name: '', 
    quantity: 0, 
    price: 0, 
  }
  handlerState = (imgUrl, name, quantity, price) => {
    this.setState({imgState: imgUrl, name: name, quantity: quantity, price: price})
  }
  handlerImageState = (imgUrl) => {
    this.setState({...this.state, imgState: imgUrl})
  }
    render() {
        return (
          <Router>
          <div className="App">
          
          <Routes>
              <Route path="/" element={<Home handelState={this.handlerState} handelImage={this.handlerImageState} />} />
              <Route path="/MenuCart" element={<div><Home handelState={this.handlerState} handelImage={this.handlerImageState} /><MenuCart statePro={this.state} /> </div> } />
              </Routes>

          </div>
          </Router>
        )
    } 

}

export default App;
