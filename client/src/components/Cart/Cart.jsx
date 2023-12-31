import axios from "axios";
import React, { useState } from "react";
import { FiCommand } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import "./Cart.scss";
function Cart() {
  const products = useSelector((state) => state.cart.products);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const total = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  const handlePayment = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/create-checkout-session`,
        products
      );
      setIsLoading(true);
      window.location.href = data.url;
    } catch (e) {
      console.log("Error", e);
    }
  };
  return (
    <div className="main-cart">
      <h1>Products in your cart</h1>
      {products.map((item) => (
        <div key={item.id} className="item">
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.description.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x ${item.price}
            </div>
          </div>
          <MdOutlineDelete
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>Subtotal</span>
        <span>${total()}</span>
      </div>
      {isLoading && <FiCommand className="loading-icon" />}
      <button disabled={products.length === 0} onClick={handlePayment}>
        Proceed to Checkout
      </button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
}

export default Cart;
