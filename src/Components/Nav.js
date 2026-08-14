import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <StyledNav>
      <ul>
        <li>
          <MotionLink
            to="/home"
            transition={{ duration: "0.75" }}
            initial={{ color: "#fff" }}
            animate={{ color: pathname === "/home" ? "#db7093" : "#fff" }}
          >
            Home
          </MotionLink>
        </li>
        <li>
          <MotionLink
            to="/product"
            transition={{ duration: "0.75" }}
            initial={{ color: "#fff" }}
            animate={{ color: pathname === "/product" ? "#db7093" : "#fff" }}
          >
            Products
          </MotionLink>
        </li>
        <li>
          <MotionLink
            to="/cart"
            transition={{ duration: "0.75" }}
            initial={{ color: "#fff" }}
            animate={{ color: pathname === "/cart" ? "#db7093" : "#fff" }}
          >
            <i class="fa-solid fa-cart-shopping"></i>
          </MotionLink>
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
    font-weight: bold;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
`;

const MotionLink = motion(Link);

export default Nav;
