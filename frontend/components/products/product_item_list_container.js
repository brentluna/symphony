import {connect} from 'react-redux';
import ProductItemList from './product_item_list';

const mapStateToProps = state => {
  
  return({
    products: state.products.products
  });
}

const mapDispatchToProps = dispatch => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(ProductItemList);
