import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Header from "./Header/Header";
import Header from "./header/header";

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/checkout" element={<>Hi This is checkout page</>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
