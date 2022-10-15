import React from "react";

const Cart = ({ cartItems }) => {
  return (
    <div>
      {cartItems.map((item) => {
        return (
          <div>
            {item.name} - {item.price}
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
