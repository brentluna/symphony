export const CartConstants = {
  RECEIVE_PRODUCT: 'RECEIVE_PRODUCT',
  REMOVE_PRODUCT: 'REMOVE_PRODUCT',
  CLEAR_CART: 'CLEAR_CART'
};

export const receiveProduct = product => ({
  type: CartConstants.RECEIVE_PRODUCT,
  product
});

export const removeProduct = product => ({
  type: CartConstants.REMOVE_PRODUCT,
  product
});

export const clearCart = () => ({
  type: CartConstants.CLEAR_CART 
});


