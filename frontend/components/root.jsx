import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app';
import {fetchProducts} from '../actions/product_actions';
import ProductItemListContainer from './products/product_item_list_container';


const Root = ({store}) => {

  const fetchItems = () => {
    store.dispatch(fetchProducts())
  }

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App} onEnter={fetchItems}>
          <IndexRoute component={ProductItemListContainer} />
        </Route>
      </Router>
    </Provider>
  )
}

export default Root;
