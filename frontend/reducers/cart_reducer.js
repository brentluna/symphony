import {CartConstants, receiveProduct, removeProduct, clearCart} from '../actions/cart_actions';

const cartReducer = (state = {}, action) => {
  switch(action.type) {
    case CartConstants.RECEIVE_PRODUCT:
      let newObj= Object.assign({}, state);
      newObj[action.product] ? newObj[action.product] = newObj[action.product] + 1 :
        newObj[action.product] = 1;
      return newObj;
    case CartConstants.CLEAR_CART:
      return {};
    case CartConstants.REMOVE_PRODUCT:
      let newObj1 = Object.assign({}, state);
      delete newObj1[action.product];
      return newObj1;
    default: 
      return state;
  }
}

export default cartReducer;
