import React from "react";

// Components
import { MovCard } from "./../Components/MovCard";

const Cart = (products) => {
  return (
    <div className="cart">
      <MovCard product={products.products[0]} />
    </div>
  );
};

export default Cart;
