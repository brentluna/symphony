import ProductMiddleware from './product_middleware';
import {applyMiddleware} from 'redux';

const RootMiddleware = applyMiddleware(
  ProductMiddleware 
);

export default RootMiddleware;

