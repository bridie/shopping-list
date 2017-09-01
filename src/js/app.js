import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/configure-store';
import ShoppingList from './components/shopping-list';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <div>
      <BrowserRouter>
        <ShoppingList />
      </BrowserRouter>
    </div>
  </Provider>
  , document.querySelector('.root'));
