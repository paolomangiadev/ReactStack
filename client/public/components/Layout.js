import React, { Component } from 'react';
import axios from 'axios';
import css from './Layout.css';
import Utils from '../utils/Utils';
import Header from './Header'

export default class Layout extends Component {
  componentDidMount() {
    const wow = Utils.registerWOW();
    wow.init();
  }
  render(){
    return (
      <div>
        <Header />
        <h1 className="pippo">Hello from React!</h1>
        <div className="wow fadeInUp" data-wow-duration="0.5s">
          Content to Reveal Here
        </div>
      </div>
    );
  }
}



// axios.get('http://localhost:3000/api/chats')
//   .then(function (response) {
//     console.log('response: ' + JSON.stringify(response));
//   })
//   .catch(function (error) {
//     console.log('err: ' + error);
//   });
//
// export default () => {
//   return (
//     <h1>Hello from React!</h1>
//   );
// }
