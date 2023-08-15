import React, { useState } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

import data from "../../data/products.json";
import { addToCart } from "../../redux/cartReducer";
import "./Product.scss";

const Product = () => {
  const dispatch = useDispatch();
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const product = data.products.find((p) => p.id == id);

  if (!product) {
    return <Navigate to={`/`} />;
  }
  console.log(product);
  const hasImages = product.images.length > 0;
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img
            src={hasImages ? product?.images[0] : product?.img}
            alt=""
            onClick={() => setSelectedImg(0)}
          />
          {hasImages && (
            <img
              src={product?.images[1]}
              alt=""
              onClick={() => setSelectedImg(1)}
            />
          )}
        </div>
        <div className="mainImg">
          <img
            src={hasImages ? product.images[selectedImg] : product?.img}
            alt=""
          />
        </div>
      </div>
      <div className="right">
        <h1>{product?.title}</h1>
        <span className="price">${product?.price}</span>
        <p>{product?.description}</p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button
          className="add"
          onClick={() =>
            dispatch(
              addToCart({
                ...product,
                quantity,
              })
            )
          }
        >
          <MdOutlineAddShoppingCart />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
