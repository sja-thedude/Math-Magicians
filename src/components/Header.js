import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <Link to="/" className="link-logo">
        <h1>Math Magicians</h1>
      </Link>
    </header>
  );
}

export default Header;
