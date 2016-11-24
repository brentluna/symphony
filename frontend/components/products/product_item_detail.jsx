import React from 'react';

const ProductItemDetail = ({price, image, name}) => (
  <li className='product-item-detail-container'>
    <div className='item-image-container'>
      <img src={image} />
    </div>
    <div className='item-detail-info'>
      <h4>{name}</h4>
      <div>{price}</div>
    </div>
    <div>
      Add To Card
    </div>
  </li>
); 


export default ProductItemDetail;



