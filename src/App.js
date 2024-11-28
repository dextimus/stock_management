import React from "react";
// import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductsList from "./components/ProductsList/ProdutsList";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  return (
    <div className="App">
      <h1>STOCK MANAGEMENT</h1>
      <div>
        <ProductsList />
        {/* <ProductDetails /> */}

      </div>
    </div>
  );
}

export default App;
