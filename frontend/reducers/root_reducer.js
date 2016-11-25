import ProductReducer from './product_reducer';
import {combineReducers} from 'redux';
import cartReducer from './cart_reducer';
import SortReducer from './sort_reducer';

const RootReducer = combineReducers({
  products: ProductReducer,
  cart: cartReducer,
  sort: SortReducer
});

export default RootReducer;
