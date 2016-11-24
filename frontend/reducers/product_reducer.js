import {ProductConstants} from '../actions/product_actions';

const ProductReducer = (state = {}, action) => {
  switch(action.type) {
    case ProductConstants.RECEIVE_PRODUCTS:
      const newObj = Object.assign({}, action.products); 
      return newObj;
    default:
      return state;
  }
};

export default ProductReducer;
