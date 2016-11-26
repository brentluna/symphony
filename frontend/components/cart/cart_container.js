import {connect} from 'react-redux';
import Cart from './cart';
import {removeProduct} from '../../actions/cart_actions';

const mapStateToProps = state => {
  return ({
    cart: state.cart
  });
}

const mapDispatchToProps = dispatch => ({
  removeProduct: product => dispatch(removeProduct(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
