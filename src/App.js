// Components
import Nav from "./Components/Nav";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

// Styles
import "./App.css";

// Router
import {
  Switch,
  Route,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <div className="App">
      <Nav />
    </div>
  );
}

export default App;
