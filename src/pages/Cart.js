import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

// Components
import { MovCard } from "./../Components/MovCard";
import styled from "styled-components";

const Cart = ({ products, setProducts, general, setGeneral }) => {
  useEffect(() => {
    products.map((p) => {
      const a = p.value * Number(p.price);
      setGeneral({
        ...general,
        price: a + general.price,
      });
      // console.log(
      //   p.value +
      //     " * " +
      //     p.price +
      //     " = " +
      //     p.value * Number(p.price) +
      //     " - " +
      //     general.price,
      // );
    });
    // console.log(general.price);
  }, products);

  return (
    <StyledCart className="cart">
      {general.value === 0 ? (
        <div className="null">
          No Items In Cart! Add
          <br />
          <Link to="/products">products</Link>
          <br />
          to proceed.
        </div>
      ) : (
        <div>
          <MovCard
            products={products}
            setProducts={setProducts}
            general={general}
            setGeneral={setGeneral}
            index={0}
          />
          <p>
            <span>total before shipping: </span>
            {general.value} items {"($" + general.price + ")"}
          </p>
        </div>
      )}
    </StyledCart>
  );
};

const StyledCart = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-direction: column;
  max-width: 768px;
  margin: 70px auto 0;
  .null {
    font-weight: 300;
    a {
      text-decoration: underline;
      color: #551a8b;
    }
  }
`;

export default Cart;
