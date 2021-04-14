import React, { useState } from "react";
import "./Header.css";
import { BiMenu } from "react-icons/bi";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
function Header() {
  const [show, setShow] = useState(false);
  const toggleNav = () => {
    setShow(!show);
  };
  console.log(show);
  return (
    <div className="header">
      <div>
        <img src="https://cdn.worldvectorlogo.com/logos/tesla-9.svg" alt="" />
      </div>
      <div className="center">
        <a href="#section-1">Model S</a>
        <a href="#section-2">Model 3</a>
        <a href="#section-3">Model X</a>
        <a href="#section-4">Model Y</a>
      </div>
      <div className="right">
        <a href="#">Shop</a>
        <a href="#">tesla account</a>
      </div>
      <div onClick={toggleNav} className="menuIcon">
        <BiMenu size={30} />
      </div>
      {show && (
        <div className="sideNav">
          <a href="#section-1">Model S</a>
          <a href="#section-2">Model 3</a>
          <a href="#section-3">Model X</a>
          <a href="#section-4">Model Y</a>
        </div>
      )}
    </div>
  );
}

export default Header;
