import React from 'react';
import {Link} from 'react-router';

require('../../../sass/product_page.scss');
require('../../../sass/reset.scss');

const ProductPage = (props) => {

  const product = props.product;

  if (product)  {
    let priceInDollars = (product.msrpInCents / 60).toFixed(2);
    return (
      <div className='product-container'>
        <div className='page-container'>
          <div className='title-container'>
            <div className='title-back-div'>
              <Link to={'/'}> 
                <i className="material-icons back-button">navigate_before</i>
              </Link> 
              <h1 className='page-title'>
                {product.name} 
              </h1>
            </div>
            <div className='price-button'>
              <p>Price: ${priceInDollars}</p>
              <input type='submit' value='Add To Cart'
                onClick={() => props.addToCart(product.name)}/>
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
      </div>
    )
  }
}

export default ProductPage;
