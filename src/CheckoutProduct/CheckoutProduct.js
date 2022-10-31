import React from "react";
import { useStateValue } from "../Providers/StateContext";
import "./CheckoutProduct.css";

function CheckoutProduct({ cartItem }) {
  const dispatch = useStateValue()[1];
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      item: cartItem,
    });
  };
  return (
    <div className="checkout__product">
      <div>
        <img src={cartItem.image} alt="" className="checkout__product__image" />
      </div>
      <div className="Checkout__product__info">
        <p>{cartItem.title}</p>
        <p className="checkout__product__price">
          <small>₹</small>
          <strong>{cartItem.price}</strong>
        </p>
        <div className="checkout__product__rating">
          {Array(cartItem.rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <button onClick={removeFromCart}>Remove from Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
