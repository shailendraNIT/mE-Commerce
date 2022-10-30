import React from "react";
import { useStateValue } from "../Providers/StateContext";
import "./Product.css";

function Product({ id, title, price, rating, image }) {
  const dispatch = useStateValue()[1];
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id,
        title,
        price,
        rating,
        image,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <strong>{`₹${price}`}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" className="product__image" />
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default Product;
