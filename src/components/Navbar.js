import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav>
      <Header />
      <ul className="list-nav">
        <li className="item-nav">
          <Link to="/" className="n-link">Home</Link>
        </li>
        <li className="item-nav">
          <Link to="/calculator" className="n-link">Calculator</Link>
        </li>
        <li className="item-nav">
          <Link to="/quote" className="n-link">Quote</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
