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

  const [products, setProducts] = useState(ProductState);

  const [collectNum, setCollectNum] = useState(0);

  return (
    <div className="App">
      <GlobalStyle />
      <Nav collectNum={collectNum}/>

      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <Home products={products} />
        </Route>
        <Route path="/products" exact>
          <Products
            products={products}
            collectNum={collectNum}
            setCollectNum={setCollectNum}
          />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart products={products} collectNum={collectNum} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
