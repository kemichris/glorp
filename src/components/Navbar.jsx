import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/glorp_logo.png";

export const Navbar = () => {
  return (
    <div className='navBar'>
      <nav>
        <img src={Logo} alt="" />
        <div className="navLinks">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/tokenomics">Tokenomics</Link>
          <Link to="/buy">How to buy</Link>
        </div>
      </nav>
    </div>
  );
};