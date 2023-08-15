import React from "react";
import Card from "../../components/Card/Card";
import data from "../../data/products.json";

import "./Home.scss";
const Home = () => {
  return (
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
  );
};

export default Home;
