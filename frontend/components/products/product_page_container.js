import ProductPage from './product_page';
import {connect} from 'react-redux';
import {receiveProduct} from '../../actions/cart_actions';

const mapStateToProps = (state, ownProps) => {

  let product;
  if (state.products.products && state.products.products.length) {
    product = state.products.products.filter(prod => prod.id ===
      parseInt(ownProps.params.productId)
    )[0];
  }
  return ({
    product: product 
  });
};

const mapDispatchToProps = dispatch => ({
  addToCart: prod =>  dispatch(receiveProduct(prod))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
