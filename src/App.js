import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Header from "./Header/Header";
import Checkout from "./Checkout/Checkout";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}
export default App;
