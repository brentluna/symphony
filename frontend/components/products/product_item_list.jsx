import React from 'react';
import ProductItemDetail from './product_item_detail';
require('../../../sass/product.scss');

class ProductItemList extends React.Component {
  constructor(props){
    super(props);
    this.createList = this.createList.bind(this);
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
      <ul>
        {this.createList()}
      </ul>
    );
  }
}

export default ProductItemList;
