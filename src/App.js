import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Header from "./Header/Header";
import Checkout from "./Checkout/Checkout";
import Login from "./Login/Login";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
      </Routes>
    </div>
  );
}
export default App;
