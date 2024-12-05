import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/context";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { detailProduct } = useContext(ProductContext);

  const { name, id, ean, weight, color, price, info } = detailProduct;

  return (
    <div className="ProductDetails">
      <div className="Name">
        <h2>{name || "Not found"}</h2>
      </div>
      <div>
        <h3>
          id: <span>{id || "Not found"}</span>
        </h3>
        <h3>
          EAN: <span>{ean || "Not found"}</span>
        </h3>
        <h3>
          Weight, kg: <span>{weight || "Not found"}</span>
        </h3>
        <h3>
          Color: <span>{color || "Not found"}</span>
        </h3>
        <h3>
          Price, $: <span>{price || "Not found"}</span>
        </h3>
        <h3>Description:</h3>
        <div className="Info">{info || "Not found"}</div>
      </div>
      <Link to={"/"}>
        <button className="Back">BACK TO PRODUCTS</button>
      </Link>
    </div>
  );
};

export default ProductDetails;
