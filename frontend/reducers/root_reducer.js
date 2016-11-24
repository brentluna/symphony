import ProductReducer from './product_reducer';
import {combineReducers} from 'redux';

const RootReducer = combineReducers({
  products: ProductReducer
});

export default RootReducer;
