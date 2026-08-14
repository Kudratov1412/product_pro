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
} from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const location = useLocation();

  const [products, setProducts] = useState(ProductState);

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />

      <Switch location={location} key={location.pathname}>
        <Route path="/home" exact>
          <Home products={products} />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
