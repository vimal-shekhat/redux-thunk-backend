import "./App.css";
import "./carts.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
import CartListing from "./containers/CartListing";
import login from "./admin/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />

          <Route path="/product/:productId" exact component={ProductDetail} />
          <Route path="/carts/list" exact component={CartListing} />
          <Route path="/admin/login" exact component={login} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
