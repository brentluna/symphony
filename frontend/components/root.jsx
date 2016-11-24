import React from 'react';
import {fetchProducts} from '../actions/product_actions';
import {Provider} from 'react-redux';
import ProductItemListContainer from './products/product_item_list_container';
import NavBar from './navbar/navbar';
require('../../sass/reset.scss');

class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.store.dispatch(fetchProducts());
  }

  render() {
    return(
      <Provider store={this.props.store}>
        <div>
          <NavBar />
          <ProductItemListContainer />
        </div>
      </Provider>
    )
  }
}

export default Root;
