import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Utils from '../../utils/Utils';

let html = document.getElementsByTagName( 'html' )[0];

class Services extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    //init of Plugins
    Utils.registerPlugins();
  }

  render(){
    return (
      <div>
      <section className="hero trasparent is-medium is-fullheight" id="particles-js">
      </section>
      </div>
    );
  }
}

export default Services;
