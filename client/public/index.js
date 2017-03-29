import React from 'react';
import { render } from 'react-dom';
import Layout from './components';

render(<Layout/>, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
