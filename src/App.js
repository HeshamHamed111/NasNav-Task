import React, {Component} from 'react';


import Home from './Home';
import MenuCart from './component/MenuCart/MenuCart';

import './App.css';


class App extends Component {

  state = {
    imgState: '', 
    name: '', 
    quantity: 0, 
    price: 0, 
    toggle: false,
  }
  handlerState = (imgUrl, name, quantity, price) => {
    this.setState({...this.state, imgState: imgUrl, name: name, quantity: quantity, price: price})
  }
  handlerImageState = (imgUrl) => {
    this.setState({...this.state, imgState: imgUrl})
  }
  handleToggle = () => {
    this.setState({...this.state, toggle: !this.state.toggle})
  }
    render() {
        return (
        
          <div className="App">
          <Home handelState={this.handlerState} handelImage={this.handlerImageState} handleToggle = {this.handleToggle} />
          <MenuCart statePro={this.state} handleToggle = {this.handleToggle}/> 
          </div>

        )
    } 

}

export default App;
