import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.module.css';


ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter>
    <Router />
  </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);
