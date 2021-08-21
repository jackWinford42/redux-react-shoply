import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";
import "./Router.css";

export default function NavRouter() {
  const cart = useSelector(st => st.cart)

  return (
    <Router>
      <div>
        <Navbar color="light" light>
          <NavbarBrand href="/">shoply</NavbarBrand>
          <Nav className="mr-auto" id="nav" navbar>
            <NavItem>
              <Link className="navLink" to="/">Catalogue</Link>
              <Link className="navLink" to="/cart">Cart</Link>
            </NavItem>
          </Nav>
          <span id="cartCount"><strong>Cart has #{cart.length} Items</strong></span>
        </Navbar>

        <Switch>
          <Route path="/products/:id">
            <ProductDetail/>
          </Route>
          <Route path="/cart">
            <Cart/>
          </Route>
          <Route path="/">
            <ProductList/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}