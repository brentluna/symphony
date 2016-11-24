import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store.js';
import {fetchProducts} from './api_utils/product_api_util';

document.addEventListener('DOMContentLoaded', () => {
  window.fetchProducts = fetchProducts;
  const store = configureStore();
  window.store = store;
  const root = document.getElementById('root');
  
  ReactDOM.render(<Root store={store} />, root);
});
