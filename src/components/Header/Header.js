import React, { useState } from "react";
import "./Header.css";
function Header() {
  const [show, setShow] = useState(false);
  const toggleNav = () => {
    setShow(!show);
  };
  console.log(show);
  return (
    <div
      style={{ backgroundColor: `${show ? "white" : ""}` }}
      className="header"
    >
      <div className="top">
        <div className="headerLeft">
          <img
            href="#section-1"
            src="https://cdn.worldvectorlogo.com/logos/tesla-9.svg"
            alt=""
          />
        </div>
        <div className="headerCenter">
          <a href="#section-1">MODEL S</a>
          <a href="#section-2">MODEL 3</a>
          <a href="#section-3">MODEL X</a>
          <a href="#section-4">MODEL Y</a>
        </div>
        <div className="headerRight">
          <a href="#section-1">Shop</a>
          <a href="">Tesla account</a>
          <img
            onClick={toggleNav}
            style={{ height: "25px", marginLeft: "15px" }}
            src="./menu.png"
            alt=""
          />
        </div>
      </div>
      {show && (
        <div className="bottom">
          <a href="#section-1">MODEL S</a>
          <a href="#section-2">MODEL 3</a>
          <a href="#section-3">MODEL X</a>
          <a href="#section-4">MODEL Y</a>
          <a href="#section-1">Shop</a>
          <a href="">Tesla account</a>
        </div>
      )}
    </div>
  );
}

export default Header;
