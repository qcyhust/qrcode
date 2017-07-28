import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import App from './components/Main';
import AppOpenerComponent from './components/AppOpenerComponent';

// Render the main component into the dom
ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="appopen" component={AppOpenerComponent} />
    </Router>, document.getElementById('app'));
