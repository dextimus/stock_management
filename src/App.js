import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ProductsList from "./components/ProductsList/ProdutsList";
import { ProductProvider } from "./context/context";

function App() {
  return (
    <ProductProvider>
      <div className="App">
        <h1>STOCK MANAGEMENT</h1>
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </ProductProvider>
  );
}

export default App;
