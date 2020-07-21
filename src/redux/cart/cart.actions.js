import { TOGGLE_CART_HIDDEN, ADD_ITEM } from "./cart.types";

export const toggleCartHidden = (action = null) => ({
  type: TOGGLE_CART_HIDDEN,
  payload: action,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});
