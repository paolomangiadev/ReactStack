import React from 'react';
import { render } from 'react-dom';
import Layout from './Layout';
import FontAwesome from 'font-awesome/css/font-awesome.min.css';
import './src/fonts/Lato/Lato.scss';
import './src/fonts/OpenSans/OpenSans.scss';
import './src/fonts/Metropolis1920/Metropolis1920.scss';
const NODE_END = process.env.NODE_ENV = process.env.NODE_ENV || 'development'; // set dev

render(<Layout/>,document.getElementById('app'));

if (module.hot && NODE_END === 'development') {
  module.hot.accept();
}
