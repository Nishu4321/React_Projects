import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import ShopContextProvider from "./context/ShopContextProvider";

const E_Commerce = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Shop />
        <Cart />
      </div>
    </div>
  );
};

export default E_Commerce;
