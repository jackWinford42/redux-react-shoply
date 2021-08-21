import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useSelector } from "react-redux";

import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";

export default function NavRouter() {
  const cart = useSelector(st => st.cart)
  return (
    <Router>
      <div>
        <ul>
          <p>
            <Link to="/">Catalogue</Link>
          </p>
          <p>
            <Link to="/cart">Cart</Link>
          </p>
          <p>Cart has #{cart.length} Items</p>
        </ul>

        <Switch>
          <Route path="/:product">
            <ProductDetail />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <ProductList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}