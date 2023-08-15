import React, { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import "./Nabbar.scss";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const products = useSelector((state) => state.cart.products);
  const total = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };
  return (
    <>
      <div className="navbar">
        <div className="wrapper container">
          <div className="left">
            <Link className="link" to="/">
              ChicFusion
            </Link>
          </div>
          <div className="center">
            <h3>Where Fashion Meets Expression!</h3>
          </div>
          <div className="right">
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <MdOutlineShoppingCart className="cart" />
              <span>{total()}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </>
  );
};

export default Navbar;
