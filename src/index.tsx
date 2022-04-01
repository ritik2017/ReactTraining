import React from 'react';
import ReactDOM from 'react-dom';
import './Styles.scss';
import Redux from './Redux'

import { createStore } from 'redux';
import { Provider } from 'react-redux'; 

import allReducers from './redux/CombineReducers';

const store = createStore(
  allReducers
)

ReactDOM.render(
  <Provider store={store}>
    <Redux/>
  </Provider>,
  document.getElementById('root')
);
