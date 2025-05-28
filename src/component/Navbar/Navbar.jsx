import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <section className="navbar">
      <div className="left">
        <h2>LOGO</h2>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Ventery</li>
          <li>Community</li>
        </ul>
      </div>
      <div className="right">
        <span className="log"> Log in</span>
        <button className="sing">Sign up</button>
      </div>
    </section>
  );
};

export default Navbar;
