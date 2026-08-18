import React from "react";
import styled from "styled-components";
// Components
import { ProCard } from "../Components/ProCard";

const Products = ({ products, cloneProducts, general, setGeneral }) => {
  return (
    <StyledProducts className="products">
      {products.map((product) => (
        <ProCard
          product={product}
          cloneProducts={cloneProducts}
          general={general}
          setGeneral={setGeneral}
        />
      ))}
    </StyledProducts>
  );
};

const StyledProducts = styled.div`
  margin: 70px 1rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem 2rem;
`;

export default Products;
