import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-buttom/custom-buttom";

import "./cart-dropdown.scss";
import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <span className="empty-cart">No Items Here</span>
      )}
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
