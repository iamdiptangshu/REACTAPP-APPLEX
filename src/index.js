import React from 'react';
import Contact from './Contact';
import Demo from './Demo'
import { Switch, BrowserRouter, Route, NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import * as serviceWorker from './serviceWorker';
ReactDOM.render((<BrowserRouter>
         <Route exact path="/" component={Demo} />
         <Route path="/contact" component={Contact} />

       </BrowserRouter>),
  document.getElementById('root')
);
serviceWorker.unregister();
