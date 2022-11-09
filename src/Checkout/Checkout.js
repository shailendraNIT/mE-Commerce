import React from "react";
import { useNavigate } from "react-router-dom";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../Providers/StateContext";
import { getCartTotal } from "../Reducers/Reducer";
import "./Checkout.css";

function Checkout() {
  const navigate = useNavigate();
  const { cart } = useStateValue()[0];
  let count = 0;
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src={require("./ad.jpg")} alt="" />
        {cart.map((cartItem) => (
          <CheckoutProduct key={count++} cartItem={cartItem} />
        ))}
      </div>
      <div className="checkout__right">
        <strong>{`Subtotal(${cart.length} items) : ₹ ${getCartTotal(
          cart
        )}`}</strong>
        <div className="checkout__git">
          <input type="checkbox" value="This order is a gift" />
          &nbsp;This order is a gift
        </div>
        <button
          className="checkout__button"
          onClick={() => {
            navigate("/payment");
          }}
        >
          Proceed to checkout
        </button>
      </div>
    </div>
  );
}

export default Checkout;
