import React, { Component } from 'react';
import bulma from 'bulma/css/bulma.css';
import axios from 'axios';
import css from './Layout.css';
import Utils from '../utils/Utils';
import Header from './Header';
import Aboutus from './Aboutus';

class Layout extends Component {
  componentDidMount() {
    const wow = Utils.registerWOW();
    wow.init();
  }
  render(){
    return (
      <div>
        <Header />
        <Aboutus />
      </div>
    );
  }
}

export default Layout;



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
