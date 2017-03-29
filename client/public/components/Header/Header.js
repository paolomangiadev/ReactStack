import React, { Component } from 'react';
import css from './Header.css';

export default class Header extends Component {
  componentDidMount() {
  }
  render(){
    return (
      <div>
        <h1 className="pippo">Hi from Header!</h1>
      </div>
    );
  }
}
