import React, { useState, useEffect } from "react";
// FrameWorks
import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { motion } from "framer-motion";

export const MovCard = (product) => {
  const p = product.product;
  console.log(p);
  

  return <StyledMovCard className="movCard">
    <img src={p.img} alt={p.title} />
    <Link to={p.url}>
      <h4>{p.title}</h4>
    </Link>
    <p>{p.price}</p>
    <div>
      <button>-</button>
      <input type="number" name="" id="" value={p.value} />
      <button>+</button>
      <button>M</button>
    </div>
    <p>{p.value * Number(p.price)}</p>
  </StyledMovCard>;
};

const StyledMovCard = styled.div``;
