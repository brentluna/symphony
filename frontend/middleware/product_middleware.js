import {ProductConstants} from '../actions/product_actions';
import {fetchProducts} from '../api_utils/product_api_util';
import {ProductConstants, receiveProducts} from '../actions/product_actions';

const ProductMiddleware = store => next => action => {
  switch(action.type) {
    case ProductConstants.FETCH_PRODUCTS:
      const successResponse = products => {
        store.dispatch(receiveProducts(products));
      };
      fetchProducts(successResponse);
      return next(action);
    default:
      return next(action);
  }
}

export default ProductMiddleware;
