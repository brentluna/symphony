import {connect} from 'react-redux';
import Cart from './cart';

const mapStateToProps = state => {
  return ({
    cart: state.cart
  });
}

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
