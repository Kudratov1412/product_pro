import React, { useState } from "react";
// Global Style
import GlobalStyle from "./Components/GlobalStyle";
// Components
import Nav from "./Components/Nav";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import { ProductState } from "./Components/ProductState";
// Router
import {
  Switch,
  Route,
  useLocation,
  Redirect,
  Prompt,
} from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const location = useLocation();

  const [products, updateProducts] = useState(ProductState);

  const setProducts = (id, newValue) => {
    updateProducts((prevProducts) =>
      prevProducts.map((p) => (p.id === id ? { ...p, value: newValue } : p)),
    );
  };

  const [delState, setDelState] = useState(false);

  const [cloneProducts, updateCloneProducts] = useState([]);

  const setCloneProducts = (id, newValue) => {
    updateCloneProducts((prevCloneProducts) =>
      prevCloneProducts.map((p) =>
        p.id === id ? { ...p, value: newValue } : p,
      ),
    );
  };

  const getCloneProducts = (id) => cloneProducts.filter((p) => p.id === id)[0];

  const delCloneProducts = (id) =>
    cloneProducts.splice(
      cloneProducts.find((p) => p.id === id),
      1,
    );

  const [general, setGeneral] = useState({
    price: 0,
    value: 0,
  });

  return (
    <div className="App">
      <GlobalStyle />
      <Nav general={general} />

      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <Home
            products={products}
            cloneProducts={cloneProducts}
            general={general}
            setGeneral={setGeneral}
          />
        </Route>
        <Route path="/products" exact>
          <Products
            products={products}
            cloneProducts={cloneProducts}
            general={general}
            setGeneral={setGeneral}
          />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart
            products={products}
            setProducts={setProducts}
            general={general}
            setGeneral={setGeneral}
            cloneProducts={cloneProducts}
            setCloneProducts={setCloneProducts}
            getCloneProducts={getCloneProducts}
            delCloneProducts={delCloneProducts}
            delState={delState}
            setDelState={setDelState}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
