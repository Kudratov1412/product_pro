import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/product">Product</a>
        </li>
        <li>
          <a href="/cart">cart</a>
        </li>
      </ul>
    </StyledNav>
  );
};

// Styled
const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
`;

export default Nav;
