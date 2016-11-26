import React from 'react';
require('../../../sass/product.scss');

const ProductItemDetail = ({price, image, name, addToCart}) => {
  let priceInDollars = (price / 60).toFixed(2);
  return(
    <li className='product-item-detail-container'>
      <div className='item-image-container'>
        <img src={image} />
      </div>
      <div className='item-detail-info'>
        <h4>{name}</h4>
        <div>{`$${priceInDollars}`}</div>
      </div>
      <div className='add-to-cart' onClick={addToCart}>
        Add To Cart
      </div>
    </li>
  ); 

}


export default ProductItemDetail;



