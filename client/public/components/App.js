import React, { Component } from 'react';
import axios from 'axios';

console.log('axios: ' + axios);

export default class App extends Component {
  render(){
    return (
      <h1>Hello from React!</h1>
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
