import React from 'react';
require('../../../sass/product_page.scss');

const ProductPage = ({product}) => {
  if (product)  {
    let priceInDollars = (product.msrpInCents / 60).toFixed(2);
    return (
      <div className='product-container'>
        <div className='page-container'>
          <div className='title-container'>
          <h1 className='page-title'>
            {product.name} 
            </h1>
            <div className='price-button'>
              <p>Price: ${priceInDollars}</p>
              <input type='submit' value='Add To Cart' />
            </div>
          </div>
          <div className='page-img'>
            <img src={`http:${product.mainImage.ref}`} />
          </div>
          <div className='page-detail'>
            
            <p>Water is the essence of moisture....</p>
          </div>
        </div>
      </div>
    )
  }  else {
    return (
      <div className='product-container'>
       empty 
      </div>
    )
  }
}

export default ProductPage;
