import React from 'react';
import {fetchProducts} from '../actions/product_actions';
import {Provider} from 'react-redux';
import ProductItemListContainer from './products/product_item_list_container';
import NavBar from './navbar/navbar';
require('../../sass/reset.scss');

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
  }

  componentDidMount() {
    this.props.store.dispatch(fetchProducts());
  }

  toggleClass(e) {
    let cart = document.getElementById('cart-ul');
    let sortBy = document.getElementById('sort-by-ul');
    if (e.target.className !== 'material-icons' && e.target.className !== 'cart-ul') {
      cart.className === 'cart-ul' ? cart.className="hidden" : 0;
    }
    if (e.target.className !== 'sort-by') {
      sortBy.className === 'sort-by-ul' ? sortBy.className = 'hidden' : 0;
    }

    e.stopPropagation();
  }

  render() {
    return(
      <Provider store={this.props.store}>
        <div onClick={this.toggleClass}>
          <NavBar />
          <ProductItemListContainer />
        </div>
      </Provider>
    )
  }
}

export default Root;
