import React from "react";
import ProductDetailsButton from "../Buttons/ProductDetailsButton";
import "./Product.css";

const Product = ({ id, name, ean, type, weight, color, quantity, price }) => {
  return (
    <table>
      <tbody>
        <tr id="Product">
          <td className="Product-column_1">{name}</td>
          <td className="Product-column_2">{ean}</td>
          <td className="Product-column_3">{type}</td>
          <td className="Product-column_3">{weight}</td>
          <td className="Product-column_3">{color}</td>
          <td className="Product-column_3">{quantity}</td>
          <td className="Product-column_3">{price}</td>
          <td className="Product-column_4">
            <ProductDetailsButton productId={id} />
            <button className="Edit">Edit</button>
            <button className="Delete">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Product;
