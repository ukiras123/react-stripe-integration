import React, { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import "./Nabbar.scss";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="wrapper container">
          <div className="left">
            <Link className="link" to="/">
              StyleMe
            </Link>
          </div>
          <div className="right">
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <MdOutlineShoppingCart className="cart" />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </>
  );
};

export default Navbar;
