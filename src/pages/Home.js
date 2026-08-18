import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

// Components
import { ProCard } from "../Components/ProCard";

const Home = ({ products, cloneProducts, general, setGeneral }) => {
  return (
    <StyledHome className="home">
      <Link to="/products">
        <h1>Shop latest season</h1>
      </Link>
      <p>Featured Products:</p>
      <div className="products">
        <ProCard
          product={products[0]}
          cloneProducts={cloneProducts}
          general={general}
          setGeneral={setGeneral}
        />
        <ProCard
          product={products[1]}
          cloneProducts={cloneProducts}
          general={general}
          setGeneral={setGeneral}
        />
        <ProCard
          product={products[2]}
          cloneProducts={cloneProducts}
          general={general}
          setGeneral={setGeneral}
        />
        <ProCard
          product={products[3]}
          cloneProducts={cloneProducts}
          general={general}
          setGeneral={setGeneral}
        />
      </div>
    </StyledHome>
  );
};

const StyledHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 70px auto 0;
  max-width: 768px;
  a {
    width: 100%;
    h1 {
      margin: 0 10px 0 19px;
      text-transform: uppercase;
      text-align: right;
      line-height: 0.7;
      font-size: 3rem;
      font-weight: bold;
    }
  }
  p {
    font-weight: 300;
    font-size: 1rem;
    margin: 1rem 0;
  }
  .products {
    max-width: 736px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-columns: auto;
    gap: 1rem 2rem;
    margin: 0 1rem 0;
  }
`;

export default Home;
