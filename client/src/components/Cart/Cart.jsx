import React from "react";
import { MdOutlineDelete } from "react-icons/md";
import "./Cart.scss";
function Cart() {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/16831785/pexels-photo-16831785/free-photo-of-back-view-of-a-young-man-wearing-a-graphic-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Basketball T-Shirt Black",
      oldPrice: 18,
      price: 12,
      description:
        "Elevate your style with our classic white t-shirt, a timeless wardrobe essential designed for comfort and versatility, perfect for any occasion",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/16048094/pexels-photo-16048094/free-photo-of-young-woman-in-casual-clothes-posing-in-studio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Printed Black Top",
      oldPrice: 20,
      price: 16,
      description:
        "Discover ultimate comfort and effortless style in our iconic white t-shirt, a must-have staple that complements your look from dawn to dusk.",
    },
    {
      id: 1,
      img: "https://images.pexels.com/photos/16831785/pexels-photo-16831785/free-photo-of-back-view-of-a-young-man-wearing-a-graphic-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Basketball T-Shirt Black",
      oldPrice: 18,
      price: 12,
      description:
        "Elevate your style with our classic white t-shirt, a timeless wardrobe essential designed for comfort and versatility, perfect for any occasion",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/16048094/pexels-photo-16048094/free-photo-of-young-woman-in-casual-clothes-posing-in-studio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Printed Black Top",
      oldPrice: 20,
      price: 16,
      description:
        "Discover ultimate comfort and effortless style in our iconic white t-shirt, a must-have staple that complements your look from dawn to dusk.",
    },
    {
      id: 1,
      img: "https://images.pexels.com/photos/16831785/pexels-photo-16831785/free-photo-of-back-view-of-a-young-man-wearing-a-graphic-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Basketball T-Shirt Black",
      oldPrice: 18,
      price: 12,
      description:
        "Elevate your style with our classic white t-shirt, a timeless wardrobe essential designed for comfort and versatility, perfect for any occasion",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/16048094/pexels-photo-16048094/free-photo-of-young-woman-in-casual-clothes-posing-in-studio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Printed Black Top",
      oldPrice: 20,
      price: 16,
      description:
        "Discover ultimate comfort and effortless style in our iconic white t-shirt, a must-have staple that complements your look from dawn to dusk.",
    },
  ];
  return (
    <div className="main-cart">
      <h1>Products in your cart</h1>
      {data.map((item) => (
        <div key={item.id} className="item">
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.description.substring(0, 100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <MdOutlineDelete className="delete" />
        </div>
      ))}
      <div className="total">
        <span>Subtotal</span>
        <span>$123</span>
      </div>
      <button>Proceed to Checkout</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
}

export default Cart;
