export const initialState = {
  cart: [],
};

export const getCartTotal = (cart) => {
  return cart
    ? cart.reduce((previousTotal, item) => item.price + previousTotal, 0)
    : 0;
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "REMOVE_FROM_CART":
      console.log("state", state);
      console.log("action", action);
      const index = state.cart.findIndex((item) => item.id === action.item.id);
      let newCart = [...state.cart];
      newCart.splice(index, 1);
      return {
        ...state,
        cart: newCart,
      };
    default:
      return state;
  }
};
