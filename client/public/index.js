import React from 'react';
import { render } from 'react-dom';
import Layout from './components';
import css from './style.css';

render(<Layout/>, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
