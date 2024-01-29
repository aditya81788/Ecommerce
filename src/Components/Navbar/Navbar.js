import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import carticon from '../Assets/carticon.png';

function Navbar() {
  const [menu, setMenu] = useState('');

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => { setMenu('shop') }}>
          Shop {menu === 'shop' ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu('mens') }}>
          Men {menu === 'mens' ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu('women') }}>
          Women {menu === 'women' ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu('kids') }}>
          Kids {menu === 'kids' ? <hr /> : null}
        </li>
      </ul>
      <div className='nav-login-cart'>
        <button>Login</button>
        <img src={carticon} alt="" />
        <div className="nav-cart-count"></div>
      </div>
    </div>
  );
}

export default Navbar;
