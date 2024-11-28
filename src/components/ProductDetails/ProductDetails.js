import React, { useContext } from "react";
import { ProductProvider } from "../../context";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { detailProduct } = useContext(ProductProvider);

  const { name, id, ean, weight, color, price, info } = detailProduct;

  return (
    <div>
      <div className="Name">
        <h2>{name}</h2>
      </div>
      <h3>
        id: <span>{id}</span>
      </h3>
      <h3>
        EAN: <span>{ean}</span>
      </h3>
      <h3>
        Weight, kg: <span>{weight}</span>
      </h3>
      <h3>
        Color: <span>{color}</span>
      </h3>
      <h3>
        Price, $: <span>{price}</span>
      </h3>
      <h3>Description:</h3>
      <div className="Info">{info}</div>

      <button className="Back">BACK TO PRODUCTS</button>
    </div>
  );
};

export default ProductDetails;
