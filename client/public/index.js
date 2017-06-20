// import './public-path';
import './public-path';
import React from 'react';
import { render } from 'react-dom';
import Layout from './Layout';
import FontAwesome from 'font-awesome/css/font-awesome.min.css';
import 'particles.js';
import './src/fonts/Lato/Lato.scss';
import './src/fonts/OpenSans/OpenSans.scss';
import './src/fonts/Metropolis1920/Metropolis1920.scss';

render(<Layout/>,document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
