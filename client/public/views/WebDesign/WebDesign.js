import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Menu from '../../components/Navbar/Menu';
import Header from '../../components/Header';
import Utils from '../../utils/Utils';

let html = document.getElementsByTagName( 'html' )[0];

class WebDesign extends Component {

  constructor(props){
    super(props);
    this.state = {
      menuopen: false
    }
  }

  onUpdate(menuState) {
    if (menuState === false) {
      this.setState({menuopen: true});
      html.classList.add("noscroll");
    }
    else {
      this.setState({menuopen: false});
      html.classList.remove("noscroll");
    }
  }

  componentDidMount() {
    //init of Plugins
    Utils.registerPlugins();
  }

  render(){
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default WebDesign;
