import React from "react";
import Header from "../Header/Header";
import Product from "../Product/Product";
import { data } from "../../data";
import "./ProductsList.css";

const ProductsList = () => {
  return (
    <div>
      <div className="New_stock">
        <button>NEW ITEM</button>
      </div>
      <div className="Products_table">
        <Header />
      </div>
      <div className="Row">
        {data.map((product) => (
          <Product {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
