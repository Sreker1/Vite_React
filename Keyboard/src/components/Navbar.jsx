import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => (
  <div className="navbar">
    <div className="navbar-title">KeyVibes</div>
    <div className="navbar-links">
      <Link to="/" className="navbar-link">Home</Link>
      <Link to="/about" className="navbar-link">About</Link>
      <Link to="/shop" className="navbar-link">Shop</Link>
      <Link to="/contact" className="navbar-link">Contact</Link>
    </div>
    <div className="navbar-cart">
      <Link to="/cart" className="cart-link">
        <FaShoppingCart size={24} />
      </Link>
    </div>
  </div>
);

export default Navbar;
