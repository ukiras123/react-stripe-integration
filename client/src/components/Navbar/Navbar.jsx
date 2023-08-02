import React from "react";
import { BsCartDash } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <Link to="/"> MyShop </Link>
        </div>
        <div className="right">
          <div className="cartIcon">
            <BsCartDash />
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
