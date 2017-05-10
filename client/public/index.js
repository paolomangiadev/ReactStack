import React from 'react';
import { render } from 'react-dom';
import {Router, Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './views/Home';
import WebDesign from './views/WebDesign'
import FontAwesome from 'font-awesome/css/font-awesome.min.css';
import './src/fonts/Lato/Lato.scss';
import './src/fonts/OpenSans/OpenSans.scss';
import './src/fonts/Metropolis1920/Metropolis1920.scss';

  render(
    <BrowserRouter>
      <main>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/webdesign" component={WebDesign}/>
      </Switch>
    </main>
    </BrowserRouter>,
    document.getElementById('app')
  );

if (module.hot) {
  module.hot.accept();
}
