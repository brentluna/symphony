import {connect} from 'react-redux';
import ProductItemList from './product_item_list';
import {applySort} from '../../actions/sort_actions';

const sortMap = {
  'Price: Low': (a, b) => {
    return Math.sign(a.msrpInCents - b.msrpInCents);
   },
  'Price: High': (a, b) => {
    return Math.sign(b.msrpInCents - a.msrpInCents);
  },
  'Name': (a, b) => {
    if (a.name > b.name) {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    } else {
      return 0;
    }
  }
  
  
}
const mapStateToProps = state => {

  let sortedProducts = []; 
  if (state.products && state.products.products && state.products.products.length) {
    let sortType = sortMap[state.sort];
    sortedProducts = state.products.products.sort(sortType);
  }

  return({
    products: sortedProducts,
    sort: state.sort
  });
}

const mapDispatchToProps = dispatch => ({
 // receiveProduct: product => dispatch() 
  applySort: sort => dispatch(applySort(sort))
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductItemList);
