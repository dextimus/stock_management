import React, { createContext, useEffect, useState } from "react";
import { data } from "./data";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(data);
  const [detailProduct, setDetailProduct] = useState({});

  const storedProducts = localStorage.getItem("products");
  if (storedProducts) {
    setProducts(JSON.parse(storedProducts));
  } else {
    setProducts(data.map((product) => ({ ...product })));
  }

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const detailProductHandler = (id) => {
    const product = products.find((product) => product.id === id);
    setDetailProduct(product);
  };

  return (
    <ProductContext.Provider value={{ products, detailProduct, detailProductHandler }}>
      {children}
    </ProductContext.Provider>
  );
};

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductContext, ProductProvider };
