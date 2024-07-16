import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/glorp_logo.png";


export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = ()=> {
    setIsOpen(!isOpen)
  }

  return (
    <div className='navbar'>
      <nav>
        <img src={Logo} alt="" />
        <div className="navLinks">
          <Link className='link' to="/">Home</Link>
          <Link className='link' to="/about">About</Link>
          <Link className='link' to="/tokenomics">Tokenomics</Link>
          <Link className='link' to="/buy">How to buy</Link>
        </div>
        <button className='socialsBtn'>Socials <i class="fa-solid fa-caret-down"></i></button>
        <div className="socialDropdown">
          <a href="https://x.com/GLRPonSol" target="_blank" rel="noopener noreferrer"></a>
        </div>
      </nav>
    </div>
  );
};