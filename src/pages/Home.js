import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

// Components
import { ProCard } from "../Components/ProCard";

const Home = (products) => {
  return (
    <StyledHome className="home">
      <Link to="/products">
        <h1>Shop latest season</h1>
      </Link>
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
  a {
    width: 100%;
    max-width: 736px;
  }
  h1 {
    width: 100%;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0.5rem;
    text-align: end;
    font-size: 3rem;
    width: 100%;
    font-family: "Work Sans", sans-serif;
  }
  p {
    font-family: "Work Sans", sans-serif;
    font-weight: 300;
    font-size: 1rem;
  }
  .products {
    max-width: 736px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 24px 48px;
    margin: 1rem;
  }
`;

export default Home;
