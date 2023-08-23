import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Card from "../../components/Card/Card";
import data from "../../data/products.json";

import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/cartReducer";
import "./Home.scss";
const Home = () => {
  let [searchParams] = useSearchParams();
  const [isSuccess, setIsSuccess] = useState(null);
  const isSuccessAfterPayment = searchParams.get("success");

  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccessAfterPayment == "true") {
      dispatch(resetCart());
      // @ts-ignore
      setIsSuccess(true);
    }
    if (isSuccessAfterPayment == "false") {
      // @ts-ignore
      setIsSuccess(false);
    }
  }, [isSuccessAfterPayment, dispatch]);

  useEffect(() => {
    if (isSuccess === null) return;
    if (isSuccess) {
      toast.success("Your order is placed successfully!");
    } else {
      toast.error("Something went wrong. Please try again!");
    }
  }, [isSuccess]);
  return (
    <>
      <div className="products">
        <img
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg"
          alt="feature img"
          className="featureImg"
        />
        <div className="content">
          <div className="title">
            <h1>Select Your Style</h1>
            <div className="line"></div>
          </div>

          <div className="productLists">
            {data?.products.map((product) => (
              <Card key={product.id} item={product} />
            ))}
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
