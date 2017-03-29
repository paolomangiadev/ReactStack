import axios from 'axios';
import animate from 'animate.css/animate.min.css';
import WOW from 'wowjs';
import React, { Component } from 'react';

console.log('axios: ' + WOW);

export default class Layout extends Component {
  componentDidMount() {
    const wow = new WOW();
    wow.init();
  }
  render(){
    return (
      <div>
      <h1>Hello from React!</h1>
      <div className="wow bounceInRight">
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
