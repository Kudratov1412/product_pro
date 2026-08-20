import React, { useState, useEffect, useRef } from "react";
// FrameWorks
import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { motion } from "framer-motion";

export const MovCard = ({
  products,
  setProducts,
  cloneProducts,
  setCloneProducts,
  getCloneProducts,
  delCloneProducts,
  setDelState,
  general,
  setGeneral,
  id,
}) => {
  console.log(id, "MovCard render");

  const p = products[id - 1];


  const inputRef = useRef(p.value);

  // useEffect(() => {
  //   console.log(p, "p");
  // }, [p]);

  // useEffect(() => {
  //   products.map((p, i) => console.log(p.value, i, "products"));
  // }, [products]);

  // useEffect(() => {
  //   cloneProducts.map((p, i) => console.log(p.value, i, "cloneProducts"));
  // }, [cloneProducts]);

  const increment = () => {
    setGeneral({
      price: general.price + Number(p.price),
      value: general.value + 1,
    });

    setProducts(id, products[id - 1].value + 1);
    setCloneProducts(id, getCloneProducts(id).value + 1);
    inputRef.current += 1;
  };

  const decrement = () => {
    if (inputRef.current > 0) {
      setGeneral({
        price: general.price - Number(p.price),
        value: general.value - 1,
      });

      setProducts(id, products[id - 1].value - 1);
      setCloneProducts(id, getCloneProducts(id).value - 1);
      inputRef.current -= 1;
    }

    if (inputRef.current === 0) {
      delCloneProducts(id);
      setProducts(id, 0);
      setDelState(true);
    }
  };

  const goNull = () => {
    setGeneral({
      price: general.price - Number(p.price) * p.value,
      value: general.value - p.value,
    });
    delCloneProducts(id);
    setProducts(id, 0);
    setDelState(true);
  };

  return (
    <StyledMovCard className="movCard">
      <img src={p.img} alt={p.title} />
      <Link to={p.url}>
        <h4>{p.title}</h4>
      </Link>
      <p className="selfPrice">${p.price}</p>
      <div className="btns">
        <div>
          <motion.button
            onClick={decrement}
            transition={{ duration: "0.3" }}
            initial={{ color: "#db7093", backgroundColor: "#fff" }}
            whileHover={{ color: "#fff", backgroundColor: "#db7093" }}
          >
            -
          </motion.button>
          <input
            type="number"
            min={0}
            value={p.value}
            useRef={inputRef}
            onChange={(e) => {
              const val = Number(e.target.value);
              if (val > inputRef) {
                setGeneral({
                  price: general.price + Number(p.price),
                  value: general.value + 1,
                });
              }
              if (val < inputRef) {
                setGeneral({
                  price: general.price - Number(p.price),
                  value: general.value - 1,
                });
                if (inputRef.current === 0) {
                  delCloneProducts(id);
                  setDelState(true);
                }
              }
              inputRef.current = val;
              setProducts(id, val);
              setCloneProducts(id, val);
            }}
          />
          <motion.button
            onClick={increment}
            transition={{ duration: "0.3" }}
            initial={{ color: "#db7093", backgroundColor: "#fff" }}
            whileHover={{ color: "#fff", backgroundColor: "#db7093" }}
          >
            +
          </motion.button>
          <motion.button
            name="delete"
            className="del"
            onClick={goNull}
            transition={{ duration: "0.3" }}
            initial={{ color: "#000" }}
            whileHover={{ color: "#db7093" }}
          >
            <i className="fa-solid fa-trash-can"></i>
            {p.value}
          </motion.button>
        </div>
      </div>
      <p className="totalPrice">${p.value * Number(p.price)}</p>
    </StyledMovCard>
  );
};

const StyledMovCard = styled.div`
  display: grid;
  grid-template-columns: 15% 48% 10% 18% 10%;
  margin: 10px 0;
  align-items: center;
  img {
    height: 100px;
    max-width: 95%;
    justify-self: center;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    h4 {
      width: 100%;
      text-align: left;
      color: #551a8b;
      font-weight: 300;
    }
  }
  .btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      button,
      input {
        font-weight: 300;
        outline: none;
        background-color: #fff;
        border-radius: 2px;
        cursor: pointer;
      }
      button {
        font-size: 1rem;
        padding: 0px 7px;
        border: 1px solid #db7093;
        color: #db7093;
      }
      input {
        max-width: 35px;
        border: 1px solid #000;
      }
      button.del {
        border: none;
        color: #000;
        font-size: 1.3rem;
        padding: 0;
      }
    }
  }
`;
