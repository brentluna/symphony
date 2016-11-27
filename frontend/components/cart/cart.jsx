import React from 'react';



class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.mapItems = this.mapItems.bind(this);
  }
  

  mapItems() {
    let cartItems = [];
    if (this.props.cart && Object.keys(this.props.cart).length) {
      for (let item in this.props.cart) {
        cartItems.push(
          <li className='cart-li' key={item}>
            <div className='cart-button-remove-div'>
              <i className="material-icons remove-icon" 
                onClick={() => this.props.removeProduct(item)}>remove</i>
            <div className='cart-name'>{item}</div>
          </div>
            <div className='cart-qty'>{this.props.cart[item]}</div> 
          </li>
        );
      }
    } else {
      cartItems.push(<li key={'empty'}>Empty</li>)
    }
    return cartItems;
  }
  
  render() {
    return (
      <ul id='cart-ul' className='hidden'>
        {this.mapItems()}
      </ul>
    )
  }
}


export default Cart;

