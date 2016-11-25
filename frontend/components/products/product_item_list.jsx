import React from 'react';
import ProductItemDetail from './product_item_detail';
require('../../../sass/product.scss');

import Collapsible from 'react-collapsible';

class ProductItemList extends React.Component {
  constructor(props){
    super(props);
    this.createList = this.createList.bind(this);
    this.state = {sorted: 'low'};
  }

  sortByDropDown() {
    let lis = [];
    ['Price: Low', 'Price: High', 'Name'].forEach((el, idx) => {
      lis.push(
        <li className='sort-by-li' key={idx} onClick={() => this.props.applySort(el)}>
          {el} 
        </li>
      ) 
    });
    return lis;
  }

  createList() {
    let lis = [];
    if (this.props.products && this.props.products.length) {
      this.props.products.forEach((product, idx) => {
        lis.push(<ProductItemDetail
                  price={product.msrpInCents}
                  name={product.name}
                  image={`http:${product.mainImage.ref}`}
                  key={product.id} />); 
      });
    }
    return lis;
  }

  render() {
    return (
      <div className='product-container'>
        <div>
          <div className='sort-by'> Sort By 
          <ul className='sort-by-ul'> 
            {this.sortByDropDown()}
        </ul>
      </div>
        </div>
        <ul className='product-ul'>
          {this.createList()}
        </ul>
      </div>
    );
  }
}

export default ProductItemList;
