import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

// Components
import { MovCard } from "./../Components/MovCard";
import styled from "styled-components";

const Cart = ({
  products,
  setProducts,
  general,
  setGeneral,
  cloneProducts,
}) => {
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
        <div className="yes">
          {cloneProducts.map((p) => (
            <MovCard
              products={products}
              setProducts={setProducts}
              cloneProducts={cloneProducts}
              general={general}
              setGeneral={setGeneral}
              id={p.id}
            />
          ))}
          <p className="footer">
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
  .yes {
    p.footer {
      text-align: left;
      font-weight: 700;
      span {
        text-transform: uppercase;
      }
    }
  }
`;

export default Cart;
