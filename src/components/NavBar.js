import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Power3 } from "gsap";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null); // Use useRef to reference the nav element

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      navRef.current,
      { opacity: 0, y: "-10%" },
      { opacity: 1, y: "0%", duration: 3, delay: 0.2, ease: Power3.easeOut }
    );
  }, []);

  // Toggle the menu on button click
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav ref={navRef} className="line">
      <div className="container">
        {/* Flex container for logo and hamburger */}
        <div className="logo-hamburger">
          <a href="logo" className="logo display-none-desktop">
            Alien
          </a>
          <div className="hamburger" onClick={toggleMenu}>
            <div className={`bar ${isOpen ? "open" : ""}`}></div>
            <div className={`bar ${isOpen ? "open" : ""}`}></div>
            <div className={`bar ${isOpen ? "open" : ""}`}></div>
          </div>
        </div>

        {/* Navigation menu */}
        <ul className={`flex-navBar ${isOpen ? "show" : ""}`}>
          <li>
            <a className="logo display-none-mobile" href="logo">
              Alien
            </a>
          </li>

          <li>
            <a className="navbar-hover-effect" href="logo">
              About Us
            </a>
          </li>
          <li>
            <a className="navbar-hover-effect" href="logo">
              Utility
            </a>
          </li>
          <li>
            <a className="navbar-hover-effect" href="logo">
              How To Buy
            </a>
          </li>
          <li>
            <a className="navbar-hover-effect" href="logo">
              RoadMap
            </a>
          </li>
          <li>
            <a className="navbar-hover-effect" href="logo">
              Telegram
            </a>
          </li>
          <li>
            <a
              className="navbar-hover-effect"
              href="https://docs.google.com/document/d/14W-7-f1hYLuRaM-I6m4xAGfEtnHbx-Rw/edit?tab=t.0"
              target="_blank"
            >
              Whitepaper
            </a>
          </li>
          <li>
            <a className="btn-navBar navbar-hover-effect" href="#btn">
              Buy Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
