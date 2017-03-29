import axios from 'axios';
import WOW from 'wowjs';
import React, { Component } from 'react';

console.log('axios: ' + WOW);

if (typeof window !== 'undefined') { let WOW = require('wowjs'); }

export default class Layout extends Component {
  componentDidMount() {
    if (typeof window !== 'undefined') { const wow = new WOW(); wow.init(); }
  }
  render(){
    return (
      <div>
      <h1>Hello from React!</h1>
      <div className="g">
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
