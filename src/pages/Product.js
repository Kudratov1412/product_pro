import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// FrameWorks
import styled from "styled-components";
import { motion } from "framer-motion";

const Product = ({
  products,
  cloneProducts,
  getCloneProducts,
  general,
  setGeneral,
}) => {
  const history = useHistory();
  const url = history.location.pathname;
  const [product, setProduct] = useState(null);
  const [prodVal, setProdVal] = useState(1);

  useEffect(() => {
    setProduct(products.find((p) => p.url === url));
  }, [products, url]);

  const pushVal = (val) => {
    product.value += val;
    if (!getCloneProducts(product.id)) {
      cloneProducts.unshift(product);
    }

    setGeneral({
      price: general.price + product.price * val,
      value: general.value + val,
    });
  };

  return (
    <>
      {product && (
        <StyledProduct className="product">
          <div className="img">
            <img src={product.img} alt={product.url} />
          </div>
          <div className="title">
            <h1>{product.title}</h1>
            <h3>{product.description}</h3>
            <div className="info">
              <h1>${product.price}</h1>
              <form action="">
                <input
                  type="number"
                  name="num"
                  id="num"
                  min={1}
                  value={prodVal}
                  onChange={(e) => setProdVal(Number(e.target.value))}
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
            </div>
          </div>
        </StyledProduct>
      )}
    </>
  );
};

const StyledProduct = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px 32px;
  grid-auto-columns: auto;
  margin: 70px 200px 0;
  .img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    img {
      max-height: 50vh;
      object-fit: scale-down;
    }
  }
  .title {
    h1 {
      text-align: left;
      margin: 1.5rem 0;
    }
    h3 {
      text-align: left;
      margin: 1.2rem 0;
    }
    .info {
      display: flex;
      justify-content: space-around;
      margin-bottom: 15px;
      h1 {
        margin: 0;
      }
      form {
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
    }
  }
`;

export default Product;
