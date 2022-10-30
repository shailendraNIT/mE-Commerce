import React from "react";
import "./Checkout.css";
function Checkout() {
  return (
    <div className="checkput">
      <div className="checkout__ad">
        <img src={require("./ad.jpg")} alt="" />
      </div>
      <div className="checkout__right">Subtotal comes here</div>
    </div>
  );
}

export default Checkout;
