import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

// Components
import { ProCard } from "../Components/ProCard";

const Home = (products) => {
  return (
    <StyledHome className="home">
      <h1>
        <Link to="/products">Shop latest season</Link>
      </h1>
      <p>Featured Products:</p>
      <div className="products">
        <ProCard product={products.products[0]} />
        <ProCard product={products.products[1]} />
        <ProCard product={products.products[2]} />
        <ProCard product={products.products[3]} />
      </div>
    </StyledHome>
  );
};

const StyledHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: bold;
    font-family: "Work Sans", sans-serif;
    padding: 1rem;
  }
  p {
    font-family: "Work Sans", sans-serif;
    font-weight: 300;
    font-size: 1rem;
    padding-bottom: 1rem;
  }
  .products {
    width: 736px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 24px 48px;
  }
`;

export default Home;
