import React, { createContext, useEffect, useState } from "react";
import { data } from "../data";

const ProductContext = createContext({
  products: [],
  detailProduct: {},
  detailProductHandler: () => {},
});

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(data);
  const [detailProduct, setDetailProduct] = useState({});

  // Nustatome pradinę būseną tik kartą
  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      setProducts(data.map((product) => ({ ...product })));
    }
  }, []); // Tuščias masyvas užtikrina, kad efektas vykdomas tik kartą

  // Išsaugome produktus į `localStorage`, kai jie pasikeičia
  useEffect(() => {
    if (products) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);

  const detailProductHandler = (id) => {
    if (products) {
      const product = products.find((product) => product.id === id);
      setDetailProduct(product);
    }
  };

  return (
    <ProductContext.Provider value={{ products, detailProduct, detailProductHandler }}>
      {children}
    </ProductContext.Provider>
  );
};

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductContext, ProductProvider };
