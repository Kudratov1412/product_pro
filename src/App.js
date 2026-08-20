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
} from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const location = useLocation();

  const [products, updateProducts] = useState(ProductState);

  const setProducts = (id, newValue) => {
    updateProducts((prevProducts) =>
      prevProducts.map((p) => (p.id === id ? { ...p, value: newValue } : p)),
    );
  };

  const [cloneProducts, updateCloneProducts] = useState([]);

  const setCloneProducts = (id, newValue) => {
    updateCloneProducts((prevCloneProducts) =>
      prevCloneProducts.map((p) =>
        p.id === id ? { ...p, value: newValue } : p,
      ),
    );
  };

  const getCloneProducts = (id) => cloneProducts.filter((p) => p.id === id)[0];

  const delCloneProducts = (id) => {
    const i = cloneProducts.findIndex((p) => p.id === id);
    cloneProducts.splice(i, 1);
  };

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
        <Route path="/products/:id">
          <Product
            products={products}
            cloneProducts={cloneProducts}
            getCloneProducts={getCloneProducts}
            general={general}
            setGeneral={setGeneral}
          />
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
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
