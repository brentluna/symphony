export const ProductConstants = {
  RECEIVE_PRODUCTS: 'RECEIVE_PRODUCTS',
  FETCH_PRODUCTS: 'FETCH_PRODUCTS'
}
export const fetchProducts = () => ({
  type: ProductConstants.FETCH_PRODUCTS
});

export const receiveProducts = products => ({
  type: ProductConstants.RECEIVE_PRODUCTS,
  products
});




