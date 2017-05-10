import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

class WebDesign extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount () {
  }

  render(){
    return (
      <div>

          {'YOLOOOOOOOOOO'}
        <Footer />
        <a data-scroll href="#first" className={classNames('toTopAnchor')}>
          <img src="../../src/images/arrowup.png" />
        </a>
      </div>
    );
  }
}

export default WebDesign;
