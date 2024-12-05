import React, { useContext } from "react";
import { ProductContext } from "../../context/context"; // Importuojame kontekstą
import "./Buttons.css";

const ProductDetailsButton = ({ productId }) => {
  const { detailProductHandler } = useContext(ProductContext); // Naudojame useContext, kad gautume funkciją

  const handleClick = () => {
    detailProductHandler(productId); // Kviečiame funkciją, kad nustatytume detales
  };

  return (
    <button onClick={handleClick} className="View">
      View
    </button> 
  );
};

export default ProductDetailsButton;
