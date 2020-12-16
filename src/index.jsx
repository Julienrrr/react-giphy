import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';
import App from './components/app';

// get the ID root in the index
const root = document.getElementById('root');
// if the ID root exist, do
if (root) {
  // render the function Hello
  ReactDOM.render(<App name="World" />, root);
}
