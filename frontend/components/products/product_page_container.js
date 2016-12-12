import ProductPage from './product_page';
import {connect} from 'react-redux';


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

});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
