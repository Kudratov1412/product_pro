import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

// Components
import { MovCard } from "./../Components/MovCard";
import styled from "styled-components";

const Cart = ({ products, collectNum }) => {
  return (
    <StyledCart className="cart">
      {collectNum === 0 ? (
        <div className="null">
          No Items In Cart! Add
          <br />
          <Link to="/products">products</Link>
          <br />
          to proceed.
        </div>
      ) : (
        <div>
          <MovCard product={products[0]} />
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
