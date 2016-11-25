import React from 'react';
require('../../../sass/navbar.scss');

const NavBar = () => (
  <header className='navbar'>
    <div className='navbar-group'>
      <div className='title-container'>
          <h1>Fiji Fun</h1> 
        <p>Water is the essence of moisture...</p>
      </div>
      <i className="material-icons">shopping_cart</i>
    </div>
  </header>
);

export default NavBar;
