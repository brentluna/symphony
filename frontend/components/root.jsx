import React from 'react';
import {fetchProducts} from '../actions/product_actions';
import {Provider} from 'react-redux';
import ProductItemListContainer from './products/product_item_list_container';

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
        <ProductItemListContainer />
      </Provider>
    )
  }
}

export default Root;
