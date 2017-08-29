import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/configure-store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <div>
      <BrowserRouter>
        <div />
      </BrowserRouter>
    </div>
  </Provider>
  , document.querySelector('.root'));
