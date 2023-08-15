import React, { useState } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import data from "../../data/products.json";
import "./Product.scss";

const Product = () => {
  // let navigate = useNavigate();

  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const product = data.products.find((p) => p.id == id);

  // if (!product) {
  //   return navigate("/");
  // }
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
        <h1>Title</h1>
        <span className="price">$199</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
          accusantium. Esse in ex unde quam veniam doloribus, at aliquid vitae
          ullam obcaecati ipsam illum blanditiis molestias sed nemo! Ut,
          ducimus.
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <MdOutlineAddShoppingCart />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
