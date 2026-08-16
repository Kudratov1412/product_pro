import React, { useState, useEffect } from "react";
// FrameWorks
import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const ProCard = (product) => {
  const p = product.product;

  return (
    <StyledProCard className="proCard">
      <Link to={p.url}>
        <img src={p.img} alt="img" />
        <h4>{p.title}</h4>
        <p>${p.price}</p>
      </Link>
      <form className="shopping">
        <input type="number" name="num" id="num" min={1} value={1} />
        <button type="submit">Add to Cart</button>
      </form>
    </StyledProCard>
  );
};

const StyledProCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 3px 7px rgba(133, 133, 133, 0.3);
  img {
    height: 200px;
    /* margin: 20px 0 5px; */
  }
  h4 {
    font-family: "Work Sans", sans-serif;
    font-weight: 300;
    margin: 1rem;
  }
  p {
    font-family: "Work Sans", sans-serif;
    font-weight: 300;
    margin: 1rem;
  }
  .shopping {
    display: flex;
    input,
    button {
      border: 2px solid #db7093;
      color: #db7093;
      outline: none;
    }
    input {
      text-align: left;
      padding: 0 5px;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      width: 50px;
      height: 30px;
    }
    button {
      position: relative;
      right: 4px;
      background-color: #fff;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      width: 100px;
    }
  }
`;
