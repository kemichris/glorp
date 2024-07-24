import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/glorp_logo.png";


export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

 const mobileMenuRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

const toggleMenu = () => {
  mobileMenuRef.current.classList.toggle("active")
  
}

  return (
    <div className='navbar'>
      <nav>
        <img src={Logo} alt="" />
        <div className="navLinks">
          <Link className='link' to="/">Home</Link>
          <a href="#about">About</a>
          <a href="#tokenomics">Tokenomics</a>
          {/* <a href="#buy">How to buy</a> */}
        </div>
        <button className='socialsBtn' onClick={toggleDropdown}>Socials <i class="fa-solid fa-caret-down"></i></button>
        {isOpen && (
          <div className="socialDropdown">
             <a href="https://x.com/GLRPonSol" target="_blank" rel="noopener noreferrer">
             <i class="fa-brands fa-x-twitter"></i>
               X (Twitter)
             </a>
          </div>

        )}
        <i class="fa-solid fa-chart-bar navBtn" onClick={toggleMenu}></i>

      </nav>
      <div className="mobileMenu" ref={mobileMenuRef}>
        <div className='closeMenu'>
          <i class="fa-solid fa-xmark" onClick={toggleMenu}></i>
        </div>
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="#tokenomics">Tokenomics</a>
        {/* <a href="#buy">How to buy</a> */}
        <div className="menuSocials">
          <a href="https://x.com/GLRPonSol" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-x-twitter"></i></a>
        </div>
      </div>
    </div>
  );
};

