import React from 'react';
require('../../../sass/navbar.scss');
import CartContainer from '../cart/cart_container';

const NavBar = () => {
  const toggleClass = () => {
    let targ = document.getElementById('cart-ul');
    if (targ.className ==='hidden') {
      targ.className = 'cart-ul';
    } else {
      targ.className = 'hidden';
    }
  }
  return (
    <header className='navbar'>
      <div className='navbar-group'>
        <div className='title-container'>
            <h1>Fiji Fun</h1> 
          <p>Water is the essence of moisture...</p>
        </div>
        <div className='cart-div'>
          <i onClick={toggleClass}className="material-icons">shopping_cart</i>
          <CartContainer />        
        </div>
      </div>
    </header>
  )
};

export default NavBar;
