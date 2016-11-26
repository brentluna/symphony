import React from 'react';
require('../../../sass/navbar.scss');
import CartContainer from '../cart/cart_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
  }
   toggleClass() {
    let targ = document.getElementById('cart-ul');
    if (targ.className ==='hidden') {
      targ.className = 'cart-ul';
    } else {
      targ.className = 'hidden';
    }
  }
  render() {
    return (
      <header className='navbar'>
        <div className='navbar-group'>
          <div className='title-container'>
              <h1>{this.props.title}</h1> 
            <p>Water is the essence of moisture...</p>
          </div>
          <div className='cart-div'>
            <i onClick={this.toggleClass}className="material-icons">shopping_cart</i>
            <CartContainer />        
          </div>
        </div>
      </header>
    )
  }
}

export default NavBar;
