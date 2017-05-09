import React from 'react';
import { render } from 'react-dom';
import {Router, Route, HashRouter} from 'react-router-dom';
import Home from './views/Home';
import FontAwesome from 'font-awesome/css/font-awesome.min.css';
import './src/fonts/Lato/Lato.scss';
import './src/fonts/OpenSans/OpenSans.scss';
import './src/fonts/Metropolis1920/Metropolis1920.scss';

  render(
    <HashRouter>
        <Route basename="/" component={Home}/>
    </HashRouter>,
    document.getElementById('app')
  );

if (module.hot) {
  module.hot.accept();
}
