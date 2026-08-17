import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = ({ collectNum }) => {
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
            <i className="fa-solid fa-cart-shopping"></i>{collectNum !== 0 ? "(" + collectNum + ")" : ""}
          </MotionLink>
        </li>
      </ul>
    </StyledNav>
  );
};

// Styled
const StyledNav = styled.nav`
  height: 50px;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  position: fixed;
  z-index: 10;
  ul {
    width: 800px;
    max-width: 600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    font-weight: bold;
  }
  a {
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
  }
  li:hover {
    color: #db7093;
  }
`;

const MotionLink = motion(Link);

export default Nav;
