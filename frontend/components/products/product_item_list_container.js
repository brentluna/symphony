import {connect} from 'react-redux';
import ProductItemList from './product_item_list';
import {applySort} from '../../actions/sort_actions';
import {receiveProduct} from '../../actions/cart_actions';

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
    let filteredProducts = [];
    if (!Object.keys(state.filters).length) {
      filteredProducts = state.products.products;
    }
    for (let filter in state.filters) {
      
      if (filter === '1200') {
        let newProds = state.products.products.filter(prod => {
          return prod.msrpInCents < 1200; 
        }); 
        filteredProducts = filteredProducts.concat(newProds);
      } else {

        let newProds = state.products.products.filter(prod => {
          return prod.name.toLowerCase().indexOf(filter) !== -1
        });
        filteredProducts = filteredProducts.concat(newProds);
      }
    }
    sortedProducts = filteredProducts.sort(sortType);
  }

  return({
    products: sortedProducts,
    sort: state.sort
  });
}

const mapDispatchToProps = dispatch => ({
  receiveProduct: product => dispatch(receiveProduct(product)),
  applySort: sort => dispatch(applySort(sort))
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductItemList);
