import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Menu from '../../components/Navbar/Menu';
import Header from '../../components/Header';
import Utils from '../../utils/Utils';
import axios from 'axios';

let html = document.getElementsByTagName( 'html' )[0];

class Services extends Component {

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

  getTemplate(service){
    axios.get('http://localhost:3000/api/services/' + service.toLowerCase())
    .then(
      function(ok){
        console.log('ok: ' + ok);
      },
      function(ko){
        console.log('ko: ' + ko);
      }
    )
    .catch((err) => console.log('error: ' + err));
  }

  componentDidMount() {
    //init of Plugins
    Utils.registerPlugins();
    this.getTemplate(this.props.match.params.service);
    console.log('heylaaaa' + this.props.match.params.service);
  }

  render(){
    return (
      <div id="particles-js">
      </div>
    );
  }
}

export default Services;
