import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <StyledNav className="nav">
      <ul>
        <li>
          <MotionLink
            to="/home"
            transition={{ duration: "0.3" }}
            initial={{ color: "#fff" }}
            whileHover={{ color: "#db7093" }}
            animate={{ color: pathname === "/home" ? "#db7093" : "#fff" }}
          >
            Home
          </MotionLink>
        </li>
        <li>
          <MotionLink
            to="/products"
            transition={{ duration: "0.3" }}
            initial={{ color: "#fff" }}
            whileHover={{ color: "#db7093" }}
            animate={{ color: pathname === "/products" ? "#db7093" : "#fff" }}
          >
            Products
          </MotionLink>
        </li>
        <li>
          <MotionLink
            to="/cart"
            transition={{ duration: "0.3" }}
            initial={{ color: "#fff" }}
            whileHover={{ color: "#db7093" }}
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
  height: 12vh;
  max-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  ul {
    width: 1000px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
    font-weight: bold;
  }
  a {
    color: #fff;
  }
  li:hover {
    color: #db7093;
  }
`;

const MotionLink = motion(Link);

export default Nav;
