import React, {Component} from 'react';
import './App.css';

import Header from './component/Header/Header';
import MainNav from './component/Header/MainNav';
import Loadmenu from './component/Header/Loadmenu';
import Description from './component/Description/Description';
import Productimg from './component/Description/Productimg';
import SimilarProduct from './component/SimilarProduct/SimilarProduct';
import Footer from './component/Footer/Footer';
import NavTop from './component/Header/NavTop';


import Container from './component/Container';

class Home extends Component {
    state = {
        counter: 0
    }
    handlerCounter = (num) => {
        this.setState({counter: num})
    }

    render() {
        return (
            <div className="home">
            <NavTop />
            <MainNav counter={this.state.counter} handleToggle={this.props.handleToggle}/>
            <Header />
            <Loadmenu />
            <Container>
            <div className="col-lg-6">
              <Productimg handelImage={this.props.handelImage} />
            </div>
            <div className="col-lg-6">
              <Description handlerCounter={this.handlerCounter} handelState={this.props.handelState} />
            </div>
            <SimilarProduct />
            </Container>
            <Footer />
            </div>

        )
    }
}
export default Home