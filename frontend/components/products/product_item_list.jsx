import React from 'react';
import ProductItemDetail from './product_item_detail';
require('../../../sass/product.scss');
import FilterContainer from '../filter/filter_container';

class ProductItemList extends React.Component {
  constructor(props){
    super(props);
    this.createList = this.createList.bind(this);
    this.toggleSortBy = this.toggleSortBy.bind(this);
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
                  addToCart={() => this.props.receiveProduct(product.name)}
                  image={`http:${product.mainImage.ref}`}
                  id={product.id}
                  key={product.id} />); 
      });
    }
    return lis;
  }

  toggleSortBy() {
    let targ = document.getElementById('sort-by-ul');
    targ.className === 'hidden' ? targ.className = 'sort-by-ul' : targ.className ='hidden';
  }

  render() {
    return (
      <div className='product-container'>
        <div className='sort-bar-container'>
          <FilterContainer /> 
          <div className='sort-by' onClick={this.toggleSortBy}> Sort By 
          <ul className='hidden' id='sort-by-ul'> 
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
