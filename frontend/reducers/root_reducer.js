import ProductReducer from './products_reducer';
import {combineReducers} from 'redux';

const RootReducer = combineReducers({
  products: ProductReducer
});

export default RootReducer;
