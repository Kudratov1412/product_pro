import React, { useState, useEffect } from "react";
// FrameWorks
import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { motion } from "framer-motion";

export const ProCard = ({ product, general, setGeneral }) => {
  const p = product;

  const [prodVal, setProdVal] = useState(1);

  const setInput = (e) => {
    const val = e.target.value;
    setProdVal(val === "" ? "" : Number(val));
  };

  const pushVal = (val) => {
    p.value += val;
    setGeneral({
      ...general,
      value: general.value + val,
    });
  };

  return (
    <StyledProCard className="proCard">
      <Link to={p.url}>
        <img src={p.img} alt="img" />
        <div>
          <h4>
            {p.title.length > 42 ? p.title.slice(0, 42) + "..." : p.title}
          </h4>
          <p>${p.price}</p>
        </div>
      </Link>
      <form className="shopping" action="">
        <input
          type="number"
          name="num"
          id="num"
          min={1}
          value={prodVal}
          onChange={setInput}
        />
        <motion.button
          onClick={() => pushVal(prodVal)}
          transition={{ duration: "0.3" }}
          initial={{ color: "#db7093", backgroundColor: "#fff" }}
          whileHover={{ color: "#fff", backgroundColor: "#db7093" }}
          type="button"
        >
          Add to Cart
        </motion.button>
      </form>
    </StyledProCard>
  );
};

const StyledProCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin: 2%;
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 3px 7px rgba(133, 133, 133, 0.3);
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      height: 200px;
      object-fit: scale-down;
      max-width: 100%;
      /* margin: 20px 0 5px; */
    }
    h4 {
      font-weight: 300;
      margin: 0.8rem;
    }
    p {
      font-weight: 300;
      margin: 0.8rem;
    }
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
