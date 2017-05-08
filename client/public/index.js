import React from 'react';
import { render } from 'react-dom';
import {Router, Route, HashRouter} from 'react-router-dom';
import Layout from './components';
import FontAwesome from 'font-awesome/css/font-awesome.min.css';
import './src/fonts/Lato/Lato.scss';
import './src/fonts/OpenSans/OpenSans.scss';
import './src/fonts/Metropolis1920/Metropolis1920.scss';

  render(
    <Layout>
      <HashRouter>
          <Route basename="/" component={Layout}/>
      </HashRouter>
    </Layout>,
      document.getElementById('app')
  );

if (module.hot) {
  module.hot.accept();
}
