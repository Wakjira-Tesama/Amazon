import React from "react";
import "./../Style/header.css";
import Locate from "./../assets/images/lo-icon.png"; // location icon

function Header() {
  return (
    <header className="amazon-header">
      {/* Left Section */}
      <div className="header-left">
        <a href="/" className="amazon-logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon logo"
          />
        </a>

        <div className="deliver-to">
          <img src={Locate} alt="Location icon" className="locate-icon" />
          <div className="deliver-text">
            <p>Deliver to</p>
            <span>Ethiopia</span>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="header-search">
        <select className="search-category">
          <option>All</option>
        </select>
        <input
          type="text"
          placeholder="Search Amazon"
          className="search-input"
        />
        <button className="search-button">
          <img
            src="https://cdn-icons-png.flaticon.com/512/49/49116.png"
            alt="Search icon"
          />
        </button>
      </div>

      {/* Right Section */}
      <div className="header-right">
        <div className="language">
          <a href="">
            <img
              src="https://flagcdn.com/w40/us.png"
              alt="US flag"
              className="flag-icon"
            />
          </a>

          <span>EN</span>
          <select name="" id="">
            <option value=""></option>
          </select>
        </div>

        <div className="account">
          <p>Hello, sign in</p>
          <span>Account & Lists</span>
        </div>

        <div className="orders">
          <p>Returns</p>
          <span>& Orders</span>
        </div>

        <div className="cart">
          <img
            src="https://cdn-icons-png.flaticon.com/512/34/34568.png"
            alt="Cart icon"
          />
          <span>Cart</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
